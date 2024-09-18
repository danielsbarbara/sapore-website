"use client"
import Link from "next/link"
import { Texts } from "./Texts"
import { usePathname } from "next/navigation"


const SecNavigation: React.FC = () => {
    const pathName = usePathname()
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex">
                <Link href={'/menu/tip-of-day'}>
                    <div className={`p-2 rounded-xl ${pathName === '/menu/tip-of-day' ? 'bg-orange-300' : ''}`}>
                        <Texts text="secNavigationSugestions" />
                    </div>
                </Link>
                <Link href={'/menu/all-menus/entries'}>
                    <div className={`p-2 rounded-xl ${/\/menu\/all-menus/.test(pathName)  ? 'bg-orange-300' : ''}`}>
                        <Texts text="secNavigationMenu" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SecNavigation