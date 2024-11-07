import { BoxContainer } from "@/app/components/BoxContainer"
import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { MenuNavigation } from "@/app/components/MenuNavigation"
import { PageImage } from "@/app/components/PageImage"
import SecNavigation from "@/app/components/SecNavigation"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Entries'
}

const page: React.FC = async () => {
    const entriesMenu = await getMenu('entries') as EntriesMenuType[]

    return (
        <div className="flex flex-col items-center pb-6 bg-bGround max-w-[90rem] lg:w-[90rem]">
            <PageImage imgUrl="/entries.jpg" description="imageEntries" />
            <div className="flex flex-col gap-4 pt-4">
                <SecNavigation />
                <MenuNavigation />
            </div>
            <BoxContainer>
                {entriesMenu.map(entrie =>
                    <EntriesMenu entries={JSON.parse(JSON.stringify(entrie))} key={entrie._id.toString()} />
                )}
            </BoxContainer>
        </div>
    )
}

export default page