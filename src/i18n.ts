import NextI18Next from 'next-i18next';
import path from 'path';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ru'],
  localePath: path.resolve('./public/locales'),
});

export default NextI18NextInstance;
export const {
  appWithTranslation,
  useTranslation,
  i18n,
  withTranslation,
  Trans,
} = NextI18NextInstance;
