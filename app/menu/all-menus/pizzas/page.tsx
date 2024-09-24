import { EntriesMenuType } from "@/app/components/EntriesMenu"
import { PageImage } from "@/app/components/PageImage"
import { SingleType } from "@/app/components/SingleType"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Pizzas'
}

const page: React.FC = async() => {
    const pizzas = await getMenu('pizzas') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center py-6 bg-bGround">
            <PageImage imgUrl="/pizza.jpg" description="imagePizzas"/>
            <Texts text="pizzasIntro" styles="max-w-80 text-center"/>
            {pizzas.map(pizza => <SingleType entries={JSON.parse(JSON.stringify(pizza))} key={pizza._id.toString()}/>)}
        </div>
    )
}

export default page