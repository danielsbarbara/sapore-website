import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { getMenu } from "@/app/server/mongoCRUD"

const page: React.FC = async() => {
    const pastas = await getMenu('pastas') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6">
            {pastas.map(pasta => <EntriesMenu entries={pasta} key={pasta._id.toString()}/>)}
        </div>
    )
}

export default page