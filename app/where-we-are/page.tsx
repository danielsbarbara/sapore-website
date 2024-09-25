import Image from "next/image"
import { Texts } from "../components/Texts"
import Link from "next/link"

const page: React.FC = () => {
    return (
        <div className="bg-bGround flex flex-col items-center py-6">
            <Texts text="aboutUsLoc" styles="pt-2 font-bold text-xl text-center" />
            <Texts text="aboutUsLocalization" styles="py-4 px-2 max-w-[60rem]" />
            <Link href="https://www.google.pt/maps/place/Sapore/@38.7278921,-9.1538652,1411m/data=!3m1!1e3!4m6!3m5!1s0xd1933769a8b5387:0xf29bc4b8513010ff!8m2!3d38.7277095!4d-9.1491427!16s%2Fg%2F11bccjbb47?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank"
            className="relative h-[20rem] w-[22rem] md:h-[40rem] md:w-[55rem] 
            flex justify-center border-[2px] border-orange-400 rounded-md">
                <Image fill src="/saporeMap.png" alt="Sapore map" className="rounded-md"/>
            </Link>
        </div>
    )
}

export default page