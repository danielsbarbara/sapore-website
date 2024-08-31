"use client"

import { getTranslation } from "../_lib/getTranslation"
import { useLanguage } from "./LanguageContext"


export const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage()
    const options = getTranslation('selectLanguage', language)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value)
    }

    return (
        <select
            className="h-8 bg-orange-700 rounded-lg text-orange-200"
            value={language}
            onChange={handleChange}>
            {options.map((option: any) => <option key={Math.random()}
                value={option.value}>
                {option.description}
            </option>)}
        </select>
    )
}