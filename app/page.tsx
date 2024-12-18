
import { Cards } from "./components/Cards";
import { Texts } from "./components/Texts";

export default function Home() {
  return (
    <>
      <div className="bg-sapore-room h-full w-full bg-fixed bg-cover bg-center 
    bg-no-repeat">
        <div className="text-white py-2 px-3 bg-gradient-to-t from-black/50
        h-[28rem] md:h-[40rem] flex flex-col justify-end overflow-x-hidden">
          <p className="text-xl font-bold md:text-3xl transition-all animate-textsFadeRightToLeft1">Sapore</p>
          <div className="transition-all animate-textsFadeRightToLeft2" style={{animationFillMode: 'backwards'}}>
            <Texts text="imageText" styles="md:text-xl" />
          </div>
          <div className="transition-all animate-textsFadeRightToLeft3" style={{animationFillMode: 'backwards'}}>
            <Texts text="slogan" styles="italic font-thin md:text-xl" />
          </div>
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
