"use client"
import Image from "next/image"
import { MenuSchema1 } from "../_lib/types"
import { useLanguage } from "./LanguageContext"

interface SingleTypeProps {
    entries: MenuSchema1
}

export const SingleType: React.FC<SingleTypeProps> = ({entries}) => {
    const { language } = useLanguage()
    return (
        <div className={`flex flex-wrap justify-center items-center py-4 gap-3 max-w-8xl`}>
                <p className="bg-greenCards w-full text-white text-center px-2 py-4 font-bold text-xl rounded-lg">
                {entries[language as keyof typeof entries] as string}
                </p>
                {entries.menu.map((item, i: number) =>
                    <div className={`flex flex-col w-[95%] md:w-[29rem] ${item.imageUrl && 'border-b-greenCards border-b-2 gap-2'}`} key={i}>
                        <div className="flex justify-between items-center px-4">
                            <p className="font-bold text-lg w-[15rem] md:w-[50rem]">{(item[language as keyof typeof item] as {name: string}).name}</p>
                            <p>{item.price}€</p>
                        </div>
                        <div className={`flex w-full px-3 gap-4 ${item.imageUrl && 'pb-4'}`}>
                            {item.imageUrl &&
                                <div className="relative h-32 w-48">
                                    <Image
                                        quality={50}
                                        fill
                                        alt={`${item[language as keyof typeof item]} image`}
                                        className="object-center rounded-lg"
                                        src={item.imageUrl} />
                                </div>}
                            {(item[language as keyof typeof item] as {description: string}).description &&
                                <div className="flex flex-col text-left self-center w-full
                                max-w-32 md:max-w-60">
                                    {(item[language as keyof typeof item] as {description: string}).description}
                                </div>}
                        </div>
                    </div>)}
            </div>
    )
}