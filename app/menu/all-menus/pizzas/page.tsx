import { EntriesMenu, EntriesMenuType } from "@/app/components/EntriesMenu"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

const page: React.FC = async() => {
    const pizzas = await getMenu('pizzas') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <Texts text="pizzasIntro" styles="max-w-80 text-center"/>
            {pizzas.map(pizza => <EntriesMenu entries={JSON.parse(JSON.stringify(pizza))} key={pizza._id.toString()}/>)}
        </div>
    )
}

export default page