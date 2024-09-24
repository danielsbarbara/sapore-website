import { BoxContainer } from "@/app/components/BoxContainer"
import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { PageImage } from "@/app/components/PageImage"
import { SingleType } from "@/app/components/SingleType"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Salads'
}

const page: React.FC = async () => {
    const salads = await getMenu('salads') as EntriesMenuType[]

    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <PageImage imgUrl="/salad.jpg" description="imageSalads" />
            <Texts text="saladsIntro" />
                {salads.map(salad =>
                    <SingleType entries={JSON.parse(JSON.stringify(salad))} key={salad._id.toString()} />
                )}
        </div>
    )
}

export default page