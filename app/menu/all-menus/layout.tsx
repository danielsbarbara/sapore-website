import { MenuNavigation } from "@/app/components/MenuNavigation"
interface LayoutProps {
    children: React.ReactNode
}
const layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <MenuNavigation/>
            {children}
        </>
    )
}

export default layout