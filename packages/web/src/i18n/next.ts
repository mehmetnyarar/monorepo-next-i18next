import NextI18Next from 'next-i18next'

const instance = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['en'],
  // lng: 'ru',
  // fallbackLng: 'ru',
  // ns: ['common'],
  // defaultNS: 'common',
  // fallbackNS: 'common',
  keySeparator: false
})

export default instance
export const {
  Trans,
  Link,
  Router,
  i18n,
  config,
  useTranslation,
  withTranslation,
  appWithTranslation
} = instance
