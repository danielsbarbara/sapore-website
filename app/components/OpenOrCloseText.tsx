"use client"

import { getTranslation } from "../_lib/getTranslation"
import { useLanguage } from "./LanguageContext"

export const OpenOrCloseText: React.FC = () => {
    const { language } = useLanguage()
    const date: number = new Date().getDay()
    let status: string
    if (date !== 7) {
        const hours: number = new Date().getHours()
        status = (hours >= 12 && hours <= 15) ? getTranslation('openStatusForLunch', language) : (hours >= 19 && hours <= 23) ? getTranslation('openStatusForDinner', language) : getTranslation('closedStatus', language)
    } else {
        status = getTranslation('closedStatus', language)
    }

    return (
        <p className="text-orange-200 text-center 
                    font-bold self-end bg-orange-400">
            {status}
        </p>
    )
}