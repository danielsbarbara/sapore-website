import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { getMenu } from "@/app/server/mongoCRUD"

const page: React.FC = async () => {
    const entriesMenu = await getMenu('entries') as EntriesMenuType[]

    return (
        <div className="flex flex-col items-center py-6">
            {entriesMenu.map(entrie =>
                <EntriesMenu entries={entrie} key={entrie._id.toString()}/>
            )}
        </div>
    )
}

export default page