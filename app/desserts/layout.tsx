import Link from "next/link"
import { DessertsNavigation } from "../components/DessertsNavigation"

interface LayoutProps {
    children: React.ReactNode
}

const layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <DessertsNavigation />
            {children}
        </div>
    )
}

export default layout