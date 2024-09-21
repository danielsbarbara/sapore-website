"use client"
import { ObjectId } from "mongodb"
import { useLanguage } from "./LanguageContext"

export interface WineCardType {
        _id: ObjectId
        menuType: 'wines',
        pt: {name: string, food: [{name: string, price: string}]}
        en: {name: string, food: [{name: string, price: string}]}
        fr: {name: string, food: [{name: string, price: string}]}
}

interface WineCardProps {
    wine: WineCardType
}

export const WineCard: React.FC<WineCardProps> = ({wine}) => {
    const {language} = useLanguage() 
    return (
        <div className="flex flex-col items-center w-full md:max-w-[48rem] py-2">
         <p className="bg-greenCards w-full text-center px-2 py-4 font-bold text-xl text-white rounded-lg">{wine[language as 'pt' | 'en' | 'fr'].name}</p>
         {wine[language as 'pt' | 'en' | 'fr'].food.map(menu => 
            <div className="w-full flex justify-between items-center px-2">
                {+menu.price <= 0 ? <p className="font-extrabold pt-4">{menu.name}</p> :
                <p>{menu.name}</p>}
                {+menu.price > 0 && `${menu.price}€`}
            </div>
         )}
        </div>
    )
}