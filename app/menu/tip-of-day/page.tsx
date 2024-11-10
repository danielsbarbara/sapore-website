import { TipsOfDayType } from "@/app/_lib/types"
import { BoxContainer } from "@/app/components/BoxContainer"
import { PageImage } from "@/app/components/PageImage"
import SecNavigation from "@/app/components/SecNavigation"
import { Texts } from "@/app/components/Texts"
import { TipCards, TipsCards } from "@/app/components/TipsCards"
import { getTipDay } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Tips Of the Day'
}

const page: React.FC = async () => {
    const tips = await getTipDay() as TipsOfDayType[]
    return (
        <div className="flex flex-col items-center pb-6 bg-bGround max-w-[90rem]">
            <PageImage imgUrl="/menu.jpg" description="secNavigationSugestions" />
            <div className="py-4">
                <SecNavigation />
            </div>
            <Texts text='tipsOfDay1' styles="text-sm pt-4 font-bold animate-bounce" />
            <BoxContainer>
                {tips.map((tip, i: number) => <TipsCards tip={JSON.parse(JSON.stringify(tip))} key={i} />)}
            </BoxContainer>
        </div>
    )
}

export default page