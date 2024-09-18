import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { getMenu } from "@/app/server/mongoCRUD"

const page: React.FC = async() => {
    const iceCreamMenu = await getMenu('ice-cream') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6">
            {iceCreamMenu.map(iceCream => <EntriesMenu entries={iceCream} key={iceCream._id.toString()}/>)}
        </div>
    )
}

export default page