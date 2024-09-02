
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
    md:max-w-7xl">
        <div className="text-white p-2">
          <p className="text-xl font-bold md:text-3xl">Sapore</p>
          <Texts text="imageText" styles="md:text-xl" />
          <Texts text="slogan" styles="italic font-thin md:text-xl" />
        </div>
      </div>
      <Cards />
      <div className="bg-orange-300 w-full md:max-w-7xl flex justify-center py-10">
        <Link href={`/about-us`} className="flex flex-col justify-end items-center">
          <Image
            className="object-cover rounded-xl"
            height={180}
            width={300}
            src={aboutus}
            alt={`Sapore image`} />
          <Texts text="aboutUs" styles="text-white text-2xl z-20 absolute drop-shadow-md" />
        </Link>
      </div>
      <Footer />
    </>
  );
}
