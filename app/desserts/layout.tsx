import Link from "next/link"
import { DessertsNavigation } from "../components/DessertsNavigation"
import { TopNavigation } from "../components/TopNavigation"

interface LayoutProps {
    children: React.ReactNode
}

const layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="bg-bGround">
            <TopNavigation/>
            <DessertsNavigation />
            {children}
        </div>
    )
}

export default layout