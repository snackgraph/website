import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "@/app/navigation";
import { readTranslationJson } from "./functions/readTranslationJson";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: await readTranslationJson(locale),
  };
});
