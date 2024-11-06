import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { PageImage } from "@/app/components/PageImage"
import { SingleType } from "@/app/components/SingleType"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Sweets'
}

const page: React.FC = async () => {
    const sweetsMenu = await getMenu('sweets') as EntriesMenuType[]
    return (
        <>
            <div className="flex flex-col items-center py-6">
                {sweetsMenu.map(sweet => <SingleType entries={JSON.parse(JSON.stringify(sweet))} key={sweet._id.toString()} />)}
            </div>
        </>
    )
}

export default page