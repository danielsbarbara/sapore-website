import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

const page: React.FC = async () => {
    const meatsMenu = await getMenu('meat') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <Texts text="meatIntro" styles="max-w-80 text-center" />
            {meatsMenu.map(meat => <EntriesMenu entries={JSON.parse(JSON.stringify(meat))} key={meat._id.toString()} />)}
        </div>
    )
}

export default page