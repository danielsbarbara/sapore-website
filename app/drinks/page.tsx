import { EntriesMenu, EntriesMenuType } from "../components/EntriesMenu"
import { PageImage } from "../components/PageImage"
import { TopNavigation } from "../components/TopNavigation"
import { getMenu } from "../server/mongoCRUD"

export const metadata = {
    title: 'Drinks'
}

const page: React.FC = async () => {
    const drinksMenu = await getMenu('drinks') as EntriesMenuType[]
    return (
        <>
            <TopNavigation />
            <PageImage imgUrl="/drinksLanding.jpg" description="imageDrinks" />
            <div className="flex flex-wrap justify-center gap-6 py-6 bg-bGround">
                {drinksMenu.map(drinks => <EntriesMenu entries={JSON.parse(JSON.stringify(drinks))} key={drinks._id.toString()} />)}
            </div>
        </>
    )
}

export default page