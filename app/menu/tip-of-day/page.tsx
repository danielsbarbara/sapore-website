import { BoxContainer } from "@/app/components/BoxContainer"
import { PageImage } from "@/app/components/PageImage"
import SecNavigation from "@/app/components/SecNavigation"
import { Texts } from "@/app/components/Texts"
import { TipCards, TipsCards } from "@/app/components/TipsCards"
import { getTipDay } from "@/app/server/mongoCRUD"
import Image from "next/image"

export const metadata = {
    title: 'Tips Of the Day'
}

const page: React.FC = async () => {
    const tips = await getTipDay() as TipCards[]
    return (
        <div className="flex flex-col items-center pb-6 bg-bGround">
            <PageImage imgUrl="/menu.jpg" description="secNavigationSugestions" />
            <div className="py-4">
                <SecNavigation />
            </div>
            <Texts text='tipsOfDay1' styles="text-sm pt-4 font-bold animate-bounce" />
            <BoxContainer>
                {tips.map(tip => <TipsCards tip={JSON.parse(JSON.stringify(tip))} key={Math.random()} />)}
            </BoxContainer>
        </div>
    )
}

export default page