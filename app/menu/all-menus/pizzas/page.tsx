import { EntriesMenuType } from "@/app/components/EntriesMenu"
import { MenuNavigation } from "@/app/components/MenuNavigation"
import { PageImage } from "@/app/components/PageImage"
import SecNavigation from "@/app/components/SecNavigation"
import { SingleType } from "@/app/components/SingleType"
import { Texts } from "@/app/components/Texts"
import { getMenu } from "@/app/server/mongoCRUD"

export const metadata = {
    title: 'Pizzas'
}

const page: React.FC = async() => {
    const pizzas = await getMenu('pizzas') as EntriesMenuType[]
    return (
        <div className="flex flex-col items-center pb-6 bg-bGround max-w-[90rem]">
            <PageImage imgUrl="/pizza.jpg" description="imagePizzas"/>
            <div className="flex flex-col gap-4 py-4">
                <SecNavigation />
                <MenuNavigation />
            </div>
            <Texts text="pizzasIntro" styles="max-w-80 text-center"/>
            {pizzas.map(pizza => <SingleType entries={JSON.parse(JSON.stringify(pizza))} key={pizza._id.toString()}/>)}
        </div>
    )
}

export default page