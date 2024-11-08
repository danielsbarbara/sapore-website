import Image from "next/image"
import { Texts } from "./Texts"
import { Suspense } from "react"

interface PageImageProps {
    imgUrl: string,
    description: string
}

export const PageImage: React.FC<PageImageProps> = ({ imgUrl, description }) => {
    return (
        <div className="relative h-60 w-full md:h-96 flex flex-col justify-end items-center">
            <Suspense>
                <Image
                    priority={true}
                    placeholder="blur"
                    blurDataURL={imgUrl}
                    quality={40}
                    fill
                    src={imgUrl}
                    alt={`${imgUrl} image`}
                    className="object-cover"
                />
            </Suspense>
            <div className="absolute w-full mb-3 transition-all animate-textsFadeRightToLeft2 bg-gradient-to-r from-transparent to-orange-300/70"
                style={{animationFillMode: 'backwards'}}>
                <Texts text={description} styles=" p-3 text-center text-white uppercase text-xl font-bold" />
            </div>
        </div>
    )
}