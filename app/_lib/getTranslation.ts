import { SelectLanguageType, translations, TranslationType } from "../data/translations";


export const getTranslation = (text: keyof any, language: any) => {

    return translations[text][language] 
}