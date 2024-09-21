import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

const page: React.FC = async() => {
    const salads = await getMenu('salads') as EntriesMenuType[]
    console.log(salads)
return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <Texts text="saladsIntro"/> 
            {salads.map(salad =>
                <EntriesMenu entries={JSON.parse(JSON.stringify(salad))} key={salad._id.toString()}/>
            )}
        </div>
    )
}

export default page