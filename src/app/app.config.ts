import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { portfolioIconProviders } from './portfolio-icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(),
    ...provideTranslateService({ fallbackLang: 'en' }),
    ...provideTranslateHttpLoader({
      prefix: './i18n/',
      suffix: '.json',
    }),
    ...portfolioIconProviders,
  ],
};
