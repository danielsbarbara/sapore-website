import { EntriesMenu, EntriesMenuType } from "../components/EntriesMenu"
import { getMenu } from "../server/mongoCRUD"

const page: React.FC = async() => {
    const drinksMenu = await getMenu('drinks') as EntriesMenuType[]
    return (
        <div>
            {drinksMenu.map(drinks => <EntriesMenu entries={drinks} key={drinks._id.toString()}/>)}
        </div>
    )
}

export default page