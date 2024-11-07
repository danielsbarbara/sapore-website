
import { Cards } from "./components/Cards";
import { Texts } from "./components/Texts";

export default function Home() {
  return (
    <>
      <div className="bg-sapore-room h-full w-full bg-fixed bg-cover bg-center 
    bg-no-repeat">
        <div className="text-white py-2 px-3 bg-gradient-to-t from-black/50
        h-[28rem] md:h-[40rem] flex flex-col justify-end">
          <p className="text-xl font-bold md:text-3xl">Sapore</p>
            <Texts text="imageText" styles="md:text-xl" />
            <Texts text="slogan" styles="italic font-thin md:text-xl" />
        </div>
        <div className="w-full bg-gradient-to-b from-black/50 h-[5rem]" />
        <Cards />
        <div className="h-[10rem] w-full bg-gradient-to-t from-black flex 
          flex-col justify-end items-center">
        </div>
      </div>
    </>
  );
}
