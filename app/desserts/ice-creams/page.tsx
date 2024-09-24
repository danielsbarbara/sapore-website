import { EntriesMenuType } from "@/app/components/EntriesMenu"
import { SingleType } from "@/app/components/SingleType"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Ice Creams'
}

const page: React.FC = async() => {
    const iceCreamMenu = await getMenu('ice-cream') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6">
            {iceCreamMenu.map(iceCream => <SingleType entries={JSON.parse(JSON.stringify(iceCream))} key={iceCream._id.toString()}/>)}
        </div>
    )
}

export default page