import { PageImage } from "../components/PageImage"
import { TopNavigation } from "../components/TopNavigation"
import { WineCard, WineCardType } from "../components/WineCard"
import { getMenu } from "../server/mongoCRUD"

export const metadata = {
    title: 'Wines'
}

const page: React.FC = async () => {
    const winesMenu = await getMenu('wines') as WineCardType[]
    return (
        <>
            <TopNavigation />
            <PageImage imgUrl="/winesLanding.jpg" description="imageWines"/>
            <div className="flex flex-wrap justify-center py-6 gap-6 bg-bGround w-full">
                {winesMenu.map(wine => <WineCard wine={JSON.parse(JSON.stringify(wine))} />)}
            </div>
        </>
    )
}

export default page
