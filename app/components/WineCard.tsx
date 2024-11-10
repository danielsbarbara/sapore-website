"use client"
import { ObjectId } from "mongodb"
import { useLanguage } from "./LanguageContext"
import { MenuSchema1 } from "../_lib/types"

export interface WineCardType {
        _id: ObjectId
        menuType: 'wines',
        pt: {name: string, food: [{name: string, price: string}]}
        en: {name: string, food: [{name: string, price: string}]}
        fr: {name: string, food: [{name: string, price: string}]}
}

interface WineCardProps {
    wine: MenuSchema1
}

export const WineCard: React.FC<WineCardProps> = ({wine}) => {
    const {language} = useLanguage() 
    return (
        <div className="flex flex-col w-full md:max-w-[30rem]">
         <p className="bg-greenCards w-full text-center px-2 py-4 font-bold text-xl text-white rounded-lg">{wine[language as keyof typeof wine] as string}</p>
         {wine.menu.map(menu => 
            <div className="w-full flex justify-between items-center px-2">
                {+menu.price <= 0 ? <p className="font-extrabold pt-4">{(menu[language as keyof typeof menu] as {name: string}).name}</p> :
                <p>{(menu[language as keyof typeof menu] as {name: string}).name}</p>}
                {+menu.price > 0 && `${menu.price}€`}
            </div>
         )}
        </div>
    )
}