import Image from "next/image"
import { Texts } from "../components/Texts"

const page: React.FC = () => {
    return (
        <div>
            <div className="relative h-[20rem] md:h-[45rem]">
                <Image
                    src={'/about-us.jpg'}
                    fill
                    alt="Photo from outside of the Sapore restaurant"
                    className="object-cover md:object-fit"
                />
                <div className="flex flex-col justify-end items-center absolute py-10 text-white h-full 
                w-full bg-gradient-to-t from-black/50">
                    <Texts text="aboutUsVisit" styles="bg-bGround/50 w-full text-center p-2 text-2xl" />
                </div>
            </div>
            <div className="bg-bGround py-8 flex flex-col items-center">
                <div>
                    <Texts text="aboutUsWelcome" styles="font-bold text-xl text-center" />
                    <Texts text="aboutUsText1" styles="py-4 px-2 max-w-[60rem]"/>
                    <Texts text="aboutUsText2" styles="py-4 px-2 max-w-[60rem]"/>
                    <Texts text="aboutUsText3" styles="py-4 px-2 max-w-[60rem]"/>
                    <Texts text="aboutUsText4" styles="py-4 px-2 max-w-[60rem]"/>
                    <Texts text="aboutUsText5" styles="py-4 px-2 max-w-[60rem]"/>
                    <Texts text="aboutUsLoc" styles="pt-2 font-bold text-xl text-center"/>
                    <Texts text="aboutUsLocalization" styles="py-4 px-2 max-w-[60rem]" />
                </div>
            </div>
        </div>
    )
}

export default page