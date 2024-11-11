import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const languages = [
  {
    name: {
      en: "English",
      es: "Inglés",
    },
    value: "en",
  },
  {
    name: {
      en: "Spanish",
      es: "Español",
    },
    value: "es",
  },
];

export const locales = languages.map(({ value }) => value);

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix: "never" });
