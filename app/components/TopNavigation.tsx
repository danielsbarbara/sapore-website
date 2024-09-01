"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Texts } from "./Texts"

export const TopNavigation: React.FC = () => {
    const pathName = usePathname()
    return (
        <div className="flex justify-around p-2">
            <Link href={'/'}>
                <Texts text="topNavigationHomePage"/>
            </Link>
            <Link 
            className={`${(pathName === '/menu/tip-of-day' || pathName === '/menu/all-menus') && 'underline decoration-orange-600 animate-pulse' }`}
            href={'/menu/tip-of-day'}>
                <Texts text="topNavigationMenuPage"/>
            </Link>
            <p>Desserts</p>
            <p>Wines</p>
            <p>Drinks</p>
        </div>
    )
}