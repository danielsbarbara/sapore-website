"use client"
import Image from "next/image"
import { EntriesMenuType } from "./EntriesMenu"
import { useLanguage } from "./LanguageContext"

interface SingleTypeProps {
    entries: EntriesMenuType
}

export const SingleType: React.FC<SingleTypeProps> = ({entries}) => {
    const { language } = useLanguage()
    return (
        <div className={`flex flex-wrap justify-center items-center py-4 gap-3 max-w-8xl ${entries.pt.food[0].imageUrl && 'gap-2 border-none'}`}>
                <p className="bg-greenCards w-full text-white text-center px-2 py-4 font-bold text-xl rounded-lg">
                {entries[language as keyof Omit<EntriesMenuType, '_id'>].name}
                </p>
                {entries[language as keyof Omit<EntriesMenuType, '_id'>].food.map((item, i: number) =>
                    <div className={`flex flex-col md:w-[29rem] ${entries.pt.food[0].imageUrl && 'border-b-greenCards border-b-2 gap-2'}`} key={i}>
                        <div className="flex justify-between items-center px-4">
                            <p className="font-bold text-lg max-w-[17rem]">{item.name}</p>
                            <p>{item.price}€</p>
                        </div>
                        <div className={`flex w-full px-3 gap-4 ${entries.pt.food[0].imageUrl && 'pb-4'}`}>
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
                                max-w-32 md:max-w-60">
                                    {item.description}
                                </div>}
                        </div>
                    </div>)}
            </div>
    )
}