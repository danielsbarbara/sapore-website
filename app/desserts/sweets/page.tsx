import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

const page: React.FC = async() => {
    const sweetsMenu = await getMenu('sweets') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6">
           {sweetsMenu.map(sweet => <EntriesMenu entries={JSON.parse(JSON.stringify(sweet))} key={sweet._id.toString()}/>)}
        </div>
    )
}

export default page