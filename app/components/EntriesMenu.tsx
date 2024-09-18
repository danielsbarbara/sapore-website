"use client"
import { ObjectId } from "mongodb"
import { useLanguage } from "./LanguageContext"
import Image from "next/image"

export interface EntriesMenuType {
    _id: ObjectId,
    pt: {
        name: string, food: [
            { name: string, price: string, description?: string, imageUrl: string }
        ]
    }
    en: {
        name: string, food: [
            { name: string, price: string, description?: string }
        ]
    }
    fr: {
        name: string, food: [
            { name: string, price: string, description?: string }
        ]
    }
}

interface EntriesMenuProps {
    entries: EntriesMenuType
}


export const EntriesMenu: React.FC<EntriesMenuProps> = ({ entries }) => {
    const { language } = useLanguage()
    return (
        <div className={`flex flex-col items-center py-4 gap-3 w-full
        max-w-[48rem] ${entries.pt.food[0].imageUrl && 'gap-2 border-none'}`}>
            <p className="bg-orange-200 w-full text-center px-2 py-4 font-bold text-xl">
            {entries[language as keyof Omit<EntriesMenuType, '_id'>].name}
            </p>
            {entries[language as keyof Omit<EntriesMenuType, '_id'>].food.map((item, i: number) =>
                <div className={`flex flex-col w-full ${entries.pt.food[0].imageUrl && 'border-b-orange-200 border-b-2 gap-2'}`} key={i}>
                    <div className="flex justify-between items-center px-4">
                        <p className="font-bold text-lg">{item.name}</p>
                        <p>{item.price}€</p>
                    </div>
                    <div className={`flex justify-between w-full px-3 ${entries.pt.food[0].imageUrl && 'pb-4'}`}>
                        {entries.pt.food[i].imageUrl &&
                            <div className="relative h-32 w-48">
                                <Image
                                    quality={50}
                                    fill
                                    alt={`${item.name} image`}
                                    className="object-center rounded-lg"
                                    src={entries.pt.food[i].imageUrl} />
                            </div>}
                        {item.description &&
                            <div className="flex flex-col text-left self-center w-full
                            max-w-32 md:max-w-80">
                                {item.description}
                            </div>}
                    </div>
                </div>)}
        </div>
    )
}