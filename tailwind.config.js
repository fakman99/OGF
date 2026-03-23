/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  safelist: [
    'text-cyan-400',
    'text-blue-400',
    'text-pink-400',
    'text-orange-400',
    'text-cyan-300',
    'text-red-400',
    'text-teal-400',
    'text-blue-500',
    'text-green-400',
    'text-red-500',
    'text-green-500',
    'text-purple-400',
    'text-orange-500',
    'text-indigo-400',
    'text-rose-400',
    'text-emerald-400',
    'text-sky-400',
    'text-sky-500',
    'text-amber-400',
    'text-neutral-200',
    'text-violet-400',
    'text-indigo-500',
  ],
  plugins: [],
};
