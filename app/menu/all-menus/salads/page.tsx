import { EntriesMenuType } from "@/app/components/EntriesMenu"
import { MenuNavigation } from "@/app/components/MenuNavigation"
import { PageImage } from "@/app/components/PageImage"
import SecNavigation from "@/app/components/SecNavigation"
import { SingleType } from "@/app/components/SingleType"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Salads'
}

const page: React.FC = async () => {
    const salads = await getMenu('salads') as EntriesMenuType[]

    return (
        <div className="flex flex-col items-center pb-6 bg-bGround">
            <PageImage imgUrl="/salad.jpg" description="imageSalads" />
            <div className="flex flex-col gap-4 py-4">
                <SecNavigation />
                <MenuNavigation />
            </div>
            <Texts text="saladsIntro" />
                {salads.map(salad =>
                    <SingleType entries={JSON.parse(JSON.stringify(salad))} key={salad._id.toString()} />
                )}
        </div>
    )
}

export default page