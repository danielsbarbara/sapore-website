"use client"
import { ObjectId } from "mongodb"
import { useLanguage } from "./LanguageContext"
import Image from "next/image"
import { MenuSchema1, MenuType4All } from "../_lib/types"

export interface EntriesMenuType {
    _id: ObjectId,
    pt: {
        menuName: string
        name: string
        description?: string
    }
    en: {
        menName: string
        name: string
        description?: string
    }
    fr: {
        menuName: string
        name: string
        description?: string
    }
    price: string
    imageUrl: string
}

interface EntriesMenuProps {
    entries: MenuSchema1
}


export const EntriesMenu: React.FC<EntriesMenuProps> = ({ entries }) => {
    const { language } = useLanguage()
    return (
        <div className={`flex flex-col items-center py-4 gap-3 w-full
        max-w-[30rem]`}>
            <p className="bg-greenCards w-full text-white text-center px-2 py-4 font-bold text-xl rounded-lg">
                {entries[language as keyof typeof entries] as string}
            </p>
            {entries.menu.map(item =>
                <div className={`flex flex-col w-full ${item.imageUrl && 'border-b-greenCards border-b-2 gap-2'}`}>
                    <div className="flex justify-between items-center px-4">
                        <p className="font-bold text-lg">{(item[language as keyof typeof item] as { name: string }).name}</p>
                        <p>{item.price}€</p>
                    </div>
                    <div className={`flex justify-between w-full px-3 ${item.imageUrl && 'pb-4'}`}>
                        {item.imageUrl &&
                            <div className="relative h-32 w-48">
                                <Image
                                    quality={50}
                                    fill
                                    alt={`${(item[language as keyof typeof item] as { name: string }).name} image`}
                                    className="object-center rounded-lg"
                                    src={item.imageUrl} />
                            </div>}
                        {(item[language as keyof typeof item] as { description: string }).description &&
                            <div className="flex flex-col text-left self-center w-full
                        max-w-32 md:max-w-60">
                                {(item[language as keyof typeof item] as { description: string }).description}
                            </div>}
                    </div>
                </div>
            )}
        </div>
    )
}