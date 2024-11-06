"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Texts } from "./Texts"

export const DessertsNavigation: React.FC = () => {
    const pathName = usePathname()
    return (
        <div className="flex justify-center gap-4 p-4">
            <Link href={'/desserts/sweets'}>
                <Texts text="dessertsNavigationSweets" styles={`${pathName === '/desserts/sweets' ? 'bg-greenCards shadow-md scale-105 font-semibold' : 'transition-all hover:bg-green-800/80 hover:scale-105 hover:shadow-xl'} p-2 rounded-lg transition-all duration-300 active:translate-y-1`}/>
            </Link>
            <Link href={'/desserts/ice-creams'}>
                <Texts text="dessertsNavigationIceCream" styles={`${pathName === '/desserts/ice-creams' ? 'bg-greenCards shadow-md scale-105 font-semibold' : 'transition-all hover:bg-green-800/80 hover:scale-105 hover:shadow-xl'} p-2 rounded-lg transition-all duration-300 active:translate-y-1`}/>
            </Link>
        </div>
    )
}