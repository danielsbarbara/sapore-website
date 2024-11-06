import Image from "next/image"
import { Texts } from "./Texts"

export const LoadingSpinner: React.FC = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center p-9">
            <Image
                height={100}
                width={100}
                src={'/Sapore Logo.webp'}
                alt="Sapore Logo"
                className="animate-spin">
            </Image>
            <Texts text="loadingText" styles="text-center"/>
        </div>
    )
}