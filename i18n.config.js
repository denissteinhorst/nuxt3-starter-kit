export default {
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'de-DE',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.json',
      },
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English (US)',
        file: 'en-US.json',
      },
      {
        code: 'fr-FR',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr-FR.json',
      },
    ],
    defaultLocale: 'en-US',
    lazy: true,
}
