import { Texts } from "@/app/components/Texts"
import { TipCards, TipsCards } from "@/app/components/TipsCards"
import { getTipDay } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Tips Of the Day'
}

const page: React.FC = async() => {
    const tips = await getTipDay() as TipCards[]
    return (
        <div className="flex flex-col items-center py-6">  
            <Texts text='tipsOfDay'/>
            <Texts text='tipsOfDay1' styles="text-sm"/>
            {tips.map(tip => <TipsCards tip={tip} key={Math.random()}/>)}
        </div>
    )
}

export default page