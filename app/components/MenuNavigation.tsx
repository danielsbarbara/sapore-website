"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Texts } from "./Texts"

const menus = [
    { path: '/menu/all-menus/entries', text: <Texts text="menuNavigationEntries" /> },
    { path: '/menu/all-menus/salads', text: <Texts text="menuNavigationSalads" /> },
    { path: '/menu/all-menus/pastas', text: <Texts text="menuNavigationPasta" /> },
    { path: '/menu/all-menus/pizzas', text: <Texts text="menuNavigationPizzas" /> },
    { path: '/menu/all-menus/fish', text: <Texts text="menuNavigationFish" /> },
    { path: '/menu/all-menus/meat', text: <Texts text="menuNavigationMeat" /> },
]
export const MenuNavigation: React.FC = () => {
    const pathName = usePathname()
    return (
        <div className="flex justify-center spacing md:gap-7 bg-bGround">
            {menus.map(menu =>
                <Link key={Math.random()}
                    href={menu.path}
                    className={`${pathName === menu.path ? 'bg-greenCards shadow-md scale-110 font-semibold' : 'transition-all duration-300 hover:bg-green-700/80 hover:scale-105'} text-center p-1 rounded-lg transition-all duration-300 active:translate-y-1`}>
                    {menu.text}
                </Link>
            )}
        </div>
    )
}