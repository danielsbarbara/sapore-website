import { BoxContainer } from "@/app/components/BoxContainer"
import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { PageImage } from "@/app/components/PageImage"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Entries'
}

const page: React.FC = async () => {
    const entriesMenu = await getMenu('entries') as EntriesMenuType[]

    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <PageImage imgUrl="/entries.jpg" description="imageEntries"/>
            <BoxContainer>
                {entriesMenu.map(entrie =>
                    <EntriesMenu entries={JSON.parse(JSON.stringify(entrie))} key={entrie._id.toString()} />
                )}
            </BoxContainer>
        </div>
    )
}

export default page