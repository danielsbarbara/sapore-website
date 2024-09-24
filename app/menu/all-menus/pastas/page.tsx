import { EntriesMenuType } from "@/app/components/EntriesMenu"
import { PageImage } from "@/app/components/PageImage"
import { SingleType } from "@/app/components/SingleType"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Pastas'
}

const page: React.FC = async() => {
    const pastas = await getMenu('pastas') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <PageImage imgUrl="/pasta.jpg" description="imagePastas"/>
            {pastas.map(pasta => <SingleType entries={JSON.parse(JSON.stringify(pasta))} key={pasta._id.toString()}/>)}
        </div>
    )
}

export default page