"use client"
import { ObjectId } from "mongodb"
import { useLanguage } from "./LanguageContext"
import Image from "next/image"
import { Texts } from "./Texts"
import { MenuSchema, TheMenuType, TipsOfDayType } from "../_lib/types"

export interface TipCards {
    _id: ObjectId,
    day: {
        pt: string
        en: string
        fr: string
    }
    menu: [{
        name: string,
        ingredients: {
            pt: string,
            en: string,
            fr: string
        },
        price: string
        imageUrl: string
    }]
}

interface TipsCardsProps {
    tip: TipsOfDayType
}

export const TipsCards: React.FC<TipsCardsProps> = ({ tip }) => {
    const { language } = useLanguage()
    const { day, menu } = tip
    return (
        <div className="flex flex-col flex-wrap items-center py-4 gap-3 w-full
        max-w-[30rem]">
            <div className="bg-greenCards w-full text-center px-2 py-4
            font-bold text-xl rounded-lg text-white">
                <p>{day[language as keyof typeof day]}</p>
            </div>
            {(menu as MenuSchema[]).map((_menu, i: number) =>
                <div className="flex flex-col gap-2 w-full border-b-2 
                border-orange-200 p-2" key={i}>
                    <div className="flex justify-between w-full">
                        <p className="font-bold">{(_menu[language as keyof typeof _menu] as {name: string}).name}</p>
                        <span>{_menu.price}€</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-2">
                        <div className="relative w-36 h-36">
                            <Image
                                fill
                                className="object-cover rounded-lg"
                                src={_menu.imageUrl}
                                alt={`${(_menu[language as keyof typeof _menu] as {name: string}).name} image`} />
                        </div>
                        <div>
                            <Texts text="tipsOfDayIngredients" styles="font-bold" />
                            <p className="w-48">{(_menu[language as keyof typeof _menu] as {description: string}).description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}