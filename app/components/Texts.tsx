"use client"

import { getTranslation } from "../_lib/getTranslation"
import { useLanguage } from "./LanguageContext"


interface TextProps {
    text: string,
    styles?: string
}

export const Texts: React.FC<TextProps> = ({ text, styles }) => {
    const { language } = useLanguage()

    return (
        <>
            <p className={styles}>{getTranslation(text, language)}</p>
        </>

    )
}