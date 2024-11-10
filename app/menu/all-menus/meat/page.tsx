import { MenuType4All } from "@/app/_lib/types"
import { EntriesMenuType } from "@/app/components/EntriesMenu"
import { MenuNavigation } from "@/app/components/MenuNavigation"
import { PageImage } from "@/app/components/PageImage"
import SecNavigation from "@/app/components/SecNavigation"
import { SingleType } from "@/app/components/SingleType"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Meat'
}

const page: React.FC = async () => {
    const meatsMenu = await getMenu('meat') as MenuType4All[]
    return (
        <div className="flex flex-col items-center pb-6 bg-bGround max-w-[90rem]">
            <PageImage imgUrl="/meat.jpg" description="imageMeat"/>
            <div className="flex flex-col gap-4 py-4">
                <SecNavigation />
                <MenuNavigation />
            </div>
            <Texts text="meatIntro" styles="max-w-80 text-center" />
            {meatsMenu.map(meat => <SingleType entries={JSON.parse(JSON.stringify(meat))} key={meat._id.toString()} />)}
        </div>
    )
}

export default page