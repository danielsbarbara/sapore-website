import SecNavigation from "../components/SecNavigation"
import { TopNavigation } from "../components/TopNavigation"

type LayoutProps = {
    children: React.ReactNode
}
const layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <TopNavigation />
            <SecNavigation/>
            {children}
        </>
    )
}

export default layout