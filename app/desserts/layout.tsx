import { DessertsNavigation } from "../components/DessertsNavigation"
import { PageImage } from "../components/PageImage"

interface LayoutProps {
    children: React.ReactNode
}

const layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="bg-bGround flex flex-col items-center max-w-[90rem]">
            <PageImage imgUrl="/dessertsLanding.jpg" description="imageDesserts"/>
            <DessertsNavigation />
            {children}
        </div>
    )
}

export default layout