import Link from "next/link"
import { DessertsNavigation } from "../components/DessertsNavigation"
import { TopNavigation } from "../components/TopNavigation"
import { PageImage } from "../components/PageImage"

interface LayoutProps {
    children: React.ReactNode
}

const layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="bg-bGround">
            <TopNavigation/>
            <DessertsNavigation />
            <PageImage imgUrl="/dessertsLanding.jpg" description="imageDesserts"/>
            {children}
        </div>
    )
}

export default layout