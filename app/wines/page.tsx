import { MenuType4All } from "../_lib/types"
import { PageImage } from "../components/PageImage"
import { WineCard } from "../components/WineCard"
import { getMenu } from "../server/mongoCRUD"

export const metadata = {
    title: 'Wines'
}

const page: React.FC = async () => {
    const winesMenu = await getMenu('wines') as MenuType4All[]
    console.log(winesMenu)
    return (
        <div className="flex flex-col items-center max-w-[90rem]">
            <PageImage imgUrl="/winesLanding.jpg" description="imageWines"/>
            <div className="flex flex-wrap justify-center py-6 gap-6 bg-bGround w-full">
                {winesMenu.map(wine => <WineCard wine={JSON.parse(JSON.stringify(wine))}/>)}
            </div>
        </div>
    )
}

export default page
