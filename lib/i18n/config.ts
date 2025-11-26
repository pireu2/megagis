export const i18n = {
  defaultLocale: "ro",
  locales: ["ro", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale);
}
