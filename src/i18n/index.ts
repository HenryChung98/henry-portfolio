import { en, type Translations } from "./en";
import { ko } from "./ko";

export const translations = { en, ko } as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: string | undefined): Translations {
  return translations[(locale ?? "en") as Locale] ?? en;
}
