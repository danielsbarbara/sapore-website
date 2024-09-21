import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

const page: React.FC = async() => {
    const fishMenu = await getMenu('fish') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <Texts text="fishIntro" styles="max-w-80 text-center"/>
            {fishMenu.map(fish => <EntriesMenu entries={JSON.parse(JSON.stringify(fish))} key={fish._id.toString()}/>)}
        </div>
    )
}

export default page