import Image from "next/image"
import Link from "next/link"
import { Texts } from "./Texts"
import menu from "../../public/menu.jpg"
import wines from "../../public/wines.jpg"
import desserts from '../../public/desserts.jpg'
import drinks from "../../public/drinks.jpg"

const images = [
  { img: menu, label: 'menu', description: 'menuDescription' },
  { img: wines, label: 'wines', description: 'winesDescription' },
  { img: desserts, label: 'desserts', description: 'dessertsDescription' },
  { img: drinks, label: 'drinks', description: 'drinksDescription' },
]

export const Cards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 py-1">
      {images.map((image, i: number) =>
        i % 2 == 0 ?
          <div className="w-[20rem] md:w-[35rem] h-48 relative md:h-80" key={i}>
            <Image
              fill
              className="object-cover rounded-lg"
              src={image.img}
              alt={`${image.label} image`} />
            <div className="rounded-lg absolute w-full h-full bg-gradient-to-r from-black grid grid-cols-2">
              <Texts text={image.description} styles="text-white text-sm max-w-64 self-center px-2 md:text-xl md:justify-self-center" />
              <div className="flex flex-col justify-between">
                <Image
                  src="/Sapore Logo.webp"
                  height={80}
                  width={80}
                  className="p-3 self-end md:self-center"
                  alt="sapore logo" />
                <Link href={`/${image.label === 'menu' ?
                  `${image.label}/tip-of-day` : 
                  image.label === 'desserts' ? `${image.label}/sweets` :
                  image.label}`}
                  className="text-white self-end flex justify-center py-2 px-4 md:p-5 md:self-center">
                  <Texts text={image.label} styles="text-white self-end bg-greenCards rounded-lg px-4 md:px-5 md:py-2" />
                </Link>
              </div>
            </div>
          </div> :
          <div className="w-[20rem] md:w-[35rem] justify-self-end h-48 relative md:h-80 rounded-lg" key={i}>
            <Image
              fill
              className="object-cover rounded-lg"
              src={image.img}
              alt={`${image.label} image`} />
            <div className="rounded-lg absolute w-full h-full bg-gradient-to-l from-black grid grid-cols-2">
              <div className="flex flex-col justify-between">
                <Image
                  src="/Sapore Logo.webp"
                  height={80}
                  width={80}
                  className="p-3 self-start md:self-center"
                  alt="sapore logo" />
                <Link href={`/${image.label === 'menu' ?
                  `${image.label}/tip-of-day` :
                  image.label}`}
                  className="text-white self-start flex py-2 px-4 md:p-5 md:self-center">
                  <Texts text={image.label} styles="text-white self-end bg-greenCards rounded-lg p-1 md:px-5 md:py-2" />
                </Link>
              </div>
              <Texts text={image.description} styles="text-white text-right max-w-64 justify-self-end text-sm self-center px-2 md:text-xl md:justify-self-center" />
            </div>
          </div>
      )}
    </div>
  )
}