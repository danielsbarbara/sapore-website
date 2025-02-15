import Image from "next/image"
import logo from "../../public/Sapore Logo.webp"
import { LanguageSelector } from "./LanguageSelector"
import { OpenOrCloseText } from "./OpenOrCloseText"
import Link from "next/link"
import { BurguerMenu } from "./BurguerMenu"

export const Header: React.FC = () => {
    return (
        <div className="w-full sticky top-0 z-50">
            <div className="flex justify-between items-center h-24 
            bg-layoutColor px-5 py-2 md:justify-around">
                <div className="relative h-20 w-20">
                    <Link href={'/'}>
                        <Image
                            fill
                            quality={70}
                            src={logo}
                            alt="Logo of the restaurant"
                            className="object-cover transition-all animate-spinLogo" />
                    </Link>
                </div>
                    <BurguerMenu/>
                <LanguageSelector />
            </div>
            <OpenOrCloseText />
        </div>
    )
}