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
        <div className="flex spacing">
            {menus.map(menu =>
                <Link key={Math.random()}
                    href={menu.path}
                    className={`${pathName === menu.path && 'bg-orange-300'} text-center`}>
                    {menu.text}
                </Link>
            )}
        </div>
    )
}