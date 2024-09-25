"use client"
import Link from "next/link"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { Texts } from "./Texts"
import { getTranslation } from "../_lib/getTranslation"
import { useLanguage } from "./LanguageContext"
import { usePathname, useRouter } from "next/navigation"

interface PathsType {
    href: string,
    text: string
}

const paths: PathsType[] = [
    { href: '/', text: 'topNavigationHomePage' },
    { href: '/menu/tip-of-day', text: 'topNavigationMenuPage' },
    { href: '/desserts/sweets', text: 'topNavigationDessertsPage' },
    { href: '/drinks', text: 'topNavigationDrinksPage' },
    { href: '/wines', text: 'topNavigationWinesPage' },
    { href: '/about-us', text: 'aboutUs' },
    { href: '/where-we-are', text: 'location' },
]

export const BurguerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { language } = useLanguage()
    const dropDownMenu = getTranslation('selectMenu', language) as { value: string, description: string }[]
    const router = useRouter()
    const urlPath = usePathname()
    const selectValue = dropDownMenu.reduce((acc, curr) => curr.value.replaceAll('/', ' ').split(' ')[1] === urlPath.replaceAll('/', ' ').split(' ')[1] ? curr.value : acc, '')

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(e.target.value)
    }

    return (
        <>
            <div className="flex flex-col relative md:hidden">
                <div className="hover:bg-bGround hover:rounded-lg" onClick={() => setIsOpen(() => !isOpen)}>
                    <RxHamburgerMenu size="2rem" color="white" />
                </div>
                {isOpen &&
                    <div className="flex flex-col gap-2 bg-gray-200 w-48 absolute 
                translate-y-9 p-2 uppercase animate-fadeIn">
                        {paths.map((item, i: number) =>
                            <Link
                                className={`${i === 5 && 'border-t-[1px] border-black'} py-1`}
                                href={item.href}
                                onClick={() => setIsOpen(() => !isOpen)}
                                key={i}>
                                <Texts text={item.text} />
                            </Link>)}
                    </div>}
            </div>
            <div className="hidden md:flex gap-5 font-thin">
                <select value={selectValue} onChange={handleChange} 
                className="bg-layoutColor text-white outline-none">
                    {dropDownMenu.map((item, i: number) => i <= 4 &&
                        <option className="text-black"
                            value={item.value}
                            key={i}>
                            {item.description}
                        </option>
                    )}
                </select>
                <Link href="/about-us"
                    className="hover:font-normal  text-white">
                    <Texts text="aboutUs" />
                </Link>
                <Link href="/where-we-are"
                    className="hover:font-normal  text-white">
                    <Texts text="location" />
                </Link>
            </div>
        </>
    )
}

{/* <div className="hover:bg-bGround hover:rounded-lg md:hidden" onClick={() => setIsOpen(() => !isOpen)}>
                <RxHamburgerMenu size="2rem" color="white" />
            </div>
            {isOpen &&
                <div className="flex flex-col gap-2 bg-gray-200 w-48 absolute 
                translate-y-9 p-2 uppercase animate-fadeIn">
                    {paths.map((item, i: number) =>
                        <Link 
                            className={`${i === 5 && 'border-t-[1px] border-black'} py-1`}
                            href={item.href} 
                            onClick={() => setIsOpen(() => !isOpen)} 
                            key={i}>
                            <Texts text={item.text} />
                        </Link>)}
                </div>
            } */}
