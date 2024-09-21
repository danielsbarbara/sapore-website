import { EntriesMenu, EntriesMenuType } from "../components/EntriesMenu"
import { TopNavigation } from "../components/TopNavigation"
import { getMenu } from "../server/mongoCRUD"

const page: React.FC = async () => {
    const drinksMenu = await getMenu('drinks') as EntriesMenuType[]
    return (
        <>
            <TopNavigation />
            <div className="flex flex-col items-center py-6 bg-bGround">
                {drinksMenu.map(drinks => <EntriesMenu entries={JSON.parse(JSON.stringify(drinks))} key={drinks._id.toString()} />)}
            </div>
        </>
    )
}

export default page