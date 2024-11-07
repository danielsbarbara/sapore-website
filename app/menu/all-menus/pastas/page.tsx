import { EntriesMenuType } from "@/app/components/EntriesMenu"
import { MenuNavigation } from "@/app/components/MenuNavigation"
import { PageImage } from "@/app/components/PageImage"
import SecNavigation from "@/app/components/SecNavigation"
import { SingleType } from "@/app/components/SingleType"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Pastas'
}

const page: React.FC = async() => {
    const pastas = await getMenu('pastas') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center pb-6 bg-bGround max-w-[90rem]">
            <PageImage imgUrl="/pasta.jpg" description="imagePastas"/>
            <div className="flex flex-col gap-4 py-4">
                <SecNavigation />
                <MenuNavigation />
            </div>
            {pastas.map(pasta => <SingleType entries={JSON.parse(JSON.stringify(pasta))} key={pasta._id.toString()}/>)}
        </div>
    )
}

export default page