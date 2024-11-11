export const readTranslationJson = async (locale: string = "en") => {
  return await import(`../messages/${locale}.json`);
};
