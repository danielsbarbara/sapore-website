"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Texts } from "./Texts"

export const DessertsNavigation: React.FC = () => {
    const pathName = usePathname()
    return (
        <div className="flex justify-center gap-4 p-4">
            <Link href={'/desserts/sweets'}>
                <Texts text="dessertsNavigationSweets" styles={`${pathName === '/desserts/sweets' ? 'bg-greenCards' : ''} p-2 rounded-lg`}/>
            </Link>
            <Link href={'/desserts/ice-creams'}>
                <Texts text="dessertsNavigationIceCream" styles={`${pathName === '/desserts/ice-creams' ? 'bg-greenCards' : ''} p-2 rounded-lg`}/>
            </Link>
        </div>
    )
}