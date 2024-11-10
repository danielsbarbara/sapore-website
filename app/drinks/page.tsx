import { MenuType4All } from "../_lib/types"
import { EntriesMenu, EntriesMenuType } from "../components/EntriesMenu"
import { PageImage } from "../components/PageImage"
import { getMenu } from "../server/mongoCRUD"

export const metadata = {
    title: 'Drinks'
}

const page: React.FC = async () => {
    const drinksMenu = await getMenu('drinks') as MenuType4All[]
    return (
        <div className="flex flex-col items-center max-w-[90rem]">
            <PageImage imgUrl="/drinksLanding.jpg" description="imageDrinks" />
            <div className="flex flex-wrap justify-center gap-6 py-6 bg-bGround">
                {drinksMenu.map(drinks => <EntriesMenu entries={JSON.parse(JSON.stringify(drinks))} key={drinks._id.toString()} />)}
            </div>
        </div>
    )
}

export default page