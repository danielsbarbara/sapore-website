import { TopNavigation } from "../components/TopNavigation"
import { WineCard, WineCardType } from "../components/WineCard"
import { getMenu } from "../server/mongoCRUD"

const page: React.FC = async () => {
    const winesMenu = await getMenu('wines') as WineCardType[]
    console.log(winesMenu)
    return (
        <>
            <TopNavigation />
            <div className="flex flex-col items-center py-6 bg-bGround w-full">
                {winesMenu.map(wine => <WineCard wine={JSON.parse(JSON.stringify(wine))} />)}
            </div>
        </>
    )
}

export default page
