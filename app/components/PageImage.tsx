import Image from "next/image"
import { Texts } from "./Texts"

interface PageImageProps {
    imgUrl: string,
    description: string
}

export const PageImage: React.FC<PageImageProps> = ({ imgUrl, description }) => {
    return (
        <div className="relative h-60 w-full md:h-96 flex flex-col justify-end items-center">
            <Image
                fill
                src={imgUrl}
                alt={`${imgUrl} image`}
                className="object-cover"
            />
            <div className="absolute w-full mb-3">
                <Texts text={description} styles="bg-orange-300/50 p-3 text-center text-white uppercase text-xl font-bold" />
            </div>
        </div>
    )
}