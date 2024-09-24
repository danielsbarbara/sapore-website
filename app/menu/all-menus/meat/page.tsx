import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { PageImage } from "@/app/components/PageImage"
import { SingleType } from "@/app/components/SingleType"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Meat'
}

const page: React.FC = async () => {
    const meatsMenu = await getMenu('meat') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <PageImage imgUrl="/meat.jpg" description="imageMeat"/>
            <Texts text="meatIntro" styles="max-w-80 text-center" />
            {meatsMenu.map(meat => <SingleType entries={JSON.parse(JSON.stringify(meat))} key={meat._id.toString()} />)}
        </div>
    )
}

export default page