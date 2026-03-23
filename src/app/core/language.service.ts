import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { SITE_ORIGIN } from '../site-links';

export const SUPPORTED_LANGS = ['en', 'fr', 'nl', 'tr'] as const;
export type AppLang = (typeof SUPPORTED_LANGS)[number];

const STORAGE_KEY = 'ogf.lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs([...SUPPORTED_LANGS]);
    const initial = this.resolveInitialLang();
    this.translate.setFallbackLang('en');
    this.translate
      .use(initial)
      .pipe(take(1))
      .subscribe(() => this.applyDocumentMeta(initial));
    this.translate.onLangChange.subscribe((e) => {
      this.persist(e.lang as AppLang);
      this.applyDocumentMeta(e.lang as AppLang);
    });
  }

  get currentLang(): AppLang {
    const lang = this.translate.getCurrentLang();
    return (SUPPORTED_LANGS as readonly string[]).includes(lang)
      ? (lang as AppLang)
      : 'en';
  }

  setLang(lang: AppLang): void {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    this.translate.use(lang);
  }

  private resolveInitialLang(): AppLang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as AppLang | null;
      if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    } catch {
      /* private mode */
    }
    const nav = typeof navigator !== 'undefined' ? navigator.language : 'en';
    const base = nav.split('-')[0]?.toLowerCase() ?? 'en';
    if ((SUPPORTED_LANGS as readonly string[]).includes(base)) {
      return base as AppLang;
    }
    return 'en';
  }

  private persist(lang: AppLang): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }

  private applyDocumentMeta(lang: AppLang): void {
    const html = this.document.documentElement;
    html.setAttribute('lang', lang);

    this.translate
      .get([
        'meta.title',
        'meta.description',
        'meta.ogLocale',
        'meta.ogSiteName',
      ])
      .pipe(take(1))
      .subscribe((t) => {
        this.title.setTitle(String(t['meta.title']));
        this.meta.updateTag({
          name: 'description',
          content: String(t['meta.description']),
        });
        this.meta.updateTag({
          property: 'og:site_name',
          content: String(t['meta.ogSiteName']),
        });
        this.meta.updateTag({
          property: 'og:title',
          content: String(t['meta.title']),
        });
        this.meta.updateTag({
          property: 'og:description',
          content: String(t['meta.description']),
        });
        this.meta.updateTag({
          property: 'og:locale',
          content: String(t['meta.ogLocale']),
        });
        this.meta.updateTag({
          name: 'twitter:title',
          content: String(t['meta.title']),
        });
        this.meta.updateTag({
          name: 'twitter:description',
          content: String(t['meta.description']),
        });

        const pageUrl = `${SITE_ORIGIN}/`;
        const ogImage = `${SITE_ORIGIN}/og-image.png`;
        this.meta.updateTag({ property: 'og:url', content: pageUrl });
        this.meta.updateTag({ property: 'og:image', content: ogImage });
        this.meta.updateTag({ name: 'twitter:image', content: ogImage });
        this.setCanonicalHref(pageUrl);
      });
  }

  private setCanonicalHref(href: string): void {
    const doc = this.document;
    let link = doc.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
