// import 'server-only';
import { i18n } from '@/i18.config';

const dictionaries = {
  en: () => import('@/app/dictionaries/en.json').then((module) => module.default),
  fa: () => import('@/app/dictionaries/fa.json').then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()
