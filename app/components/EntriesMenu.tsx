"use client"
import { ObjectId } from "mongodb"
import { useLanguage } from "./LanguageContext"

export interface EntriesMenuType {
    _id: ObjectId,
    pt: {
        name: string, food: [
            { name: string, price: number, description?: string }
        ]
    }
    en: {
        name: string, food: [
            { name: string, price: number, description?: string }
        ]
    }
    fr: {
        name: string, food: [
            { name: string, price: number, description?: string }
        ]
    }
}

interface EntriesMenuProps {
    entries: EntriesMenuType
}


export const EntriesMenu: React.FC<EntriesMenuProps> = ({ entries }) => {
    const { language } = useLanguage()
    return (
        <div className="flex flex-col items-center border-b-orange-200 border-b-2 py-2">
            <p className="font-bold text-xl bg-orange-200 w-full text-center">
                -- {entries[language as keyof Omit<EntriesMenuType, '_id'>].name} --
            </p>
            {entries[language as keyof Omit<EntriesMenuType, '_id'>].food.map(item =>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center px-4">
                        <p className="font-bold">{item.name}</p>
                        <p className="">{item.price}€</p>
                    </div>
                    {item.description && 
                    <div className="text-center w-64 self-center">
                        {item.description}
                    </div>}
                </div>)}
        </div>
    )
}