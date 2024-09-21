
import Image from "next/image";
import Link from "next/link";
import aboutus from "../public/Sapore.webp";
import { Cards } from "./components/Cards";
import { Texts } from "./components/Texts";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex items-end relative h-[30rem] w-full box-content 
    bg-sapore-room bg-center bg-no-repeat bg-cover z-10 before:content-[''] 
    before:absolute before:inset-0 before:block before:bg-gradient-to-t 
    before:from-black before:opacity-80 before:z-[-5] md:h-[38rem] 
    ">
        <div className="text-white p-2">
          <p className="text-xl font-bold md:text-3xl">Sapore</p>
          <Texts text="imageText" styles="md:text-xl" />
          <Texts text="slogan" styles="italic font-thin md:text-xl" />
        </div>
      </div>
      <Cards />
      <div className="bg-bGround w-full flex justify-end items-end relative h-48 md:h-96">
          <Image
            className="object-cover"
            fill
            src={aboutus}
            alt={`Sapore image`} />
        <div className="h-full w-full bg-gradient-to-t from-black z-20 absolute flex flex-col justify-end items-center">
          <Link href={`/about-us`} className="justify-self-end bg-greenCards rounded-lg px-4 mb-4 md:px-5 md:py-2">
            <Texts text="aboutUs" styles="text-white text-lg" />
          </Link>
        </div>
      </div>
    </>
  );
}
