import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { PageImage } from "@/app/components/PageImage"
import { SingleType } from "@/app/components/SingleType"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Fish'
}

const page: React.FC = async() => {
    const fishMenu = await getMenu('fish') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <PageImage imgUrl="/fish.jpg" description="imageFish"/>
            <Texts text="fishIntro" styles="max-w-80 text-center"/>
            {fishMenu.map(fish => <SingleType entries={JSON.parse(JSON.stringify(fish))} key={fish._id.toString()}/>)}
        </div>
    )
}

export default page