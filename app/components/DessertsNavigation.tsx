"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Texts } from "./Texts"

export const DessertsNavigation: React.FC = () => {
    const pathName = usePathname()
    return (
        <div>
            <Link href={'/desserts/sweets'}>
                <Texts text="dessertsNavigationSweets" styles={`${pathName === '/desserts/sweets' ? 'bg-orange-300' : ''}`}/>
            </Link>
            <Link href={'/desserts/ice-creams'}>
                <Texts text="dessertsNavigationIceCream" styles={`${pathName === '/desserts/ice-creams' ? 'bg-orange-300' : ''}`}/>
            </Link>
        </div>
    )
}