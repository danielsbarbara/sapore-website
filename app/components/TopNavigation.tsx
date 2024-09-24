"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Texts } from "./Texts"

export const TopNavigation: React.FC = () => {
    const pathName = usePathname()

    return (
        <div className="flex flex-wrap justify-around p-2 gap-3 bg-bGround">
            <Link href={'/'}>
                <Texts text="topNavigationHomePage" />
            </Link>
            <Link
                className={`${(pathName === '/menu/tip-of-day' || /\/menu\/all-menus/.test(pathName)) && 'underline decoration-greenCards animate-pulse font-bold'}`}
                href={'/menu/tip-of-day'}>
                <Texts text="topNavigationMenuPage" />
            </Link>
            <Link href={'/desserts/sweets'}
                className={`${(/\/desserts\//.test(pathName)) && 'underline decoration-greenCards animate-pulse font-bold'}`}>
                <Texts text="topNavigationDessertsPage" />
            </Link>
            <Link href={'/wines'}
                className={`${pathName === '/wines' && 'underline decoration-greenCards animate-pulse font-bold'}`}>
                <Texts text="topNavigationWinesPage" />
            </Link>
            <Link href={'/drinks'}
                className={`${pathName === '/drinks' && 'underline decoration-greenCards animate-pulse font-bold'}`}>
                <Texts text="topNavigationDrinksPage" />
            </Link>
        </div>
    )
}