"use client"
import Link from "next/link"
import { Texts } from "./Texts"
import { usePathname } from "next/navigation"


const SecNavigation: React.FC = () => {
    const pathName = usePathname()
    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-bGround">
            <div className="flex gap-2">
                <Link href={'/menu/tip-of-day'}>
                    <div className={`p-2 rounded-xl ${pathName === '/menu/tip-of-day' ? 'bg-greenCards shadow-md font-semibold' : 'transition-all hover:bg-green-800/80 hover:scale-105 hover:shadow-xl'} transition-all duration-300 active:translate-y-1`}>
                        <Texts text="secNavigationSugestions" />
                    </div>
                </Link>
                <Link href={'/menu/all-menus/entries'}>
                    <div className={`p-2 rounded-xl ${/\/menu\/all-menus/.test(pathName)  ? 'bg-greenCards shadow-md font-semibold' : 'transition-all hover:bg-green-800/80 hover:scale-105 hover:shadow-lg'} transition-all duration-300 active:translate-y-1`}>
                        <Texts text="secNavigationMenu" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SecNavigation