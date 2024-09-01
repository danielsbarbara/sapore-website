import Image from "next/image"
import Link from "next/link"
import { Texts } from "./Texts"
import menu from "../../public/menu.jpg"
import wines from "../../public/wines.jpg"
import desserts from '../../public/desserts.jpg'
import drinks from "../../public/drinks.jpg"

const images = [
  { img: menu, description: 'menu' },
  { img: wines, description: 'wines' },
  { img: desserts, description: 'desserts' },
  { img: drinks, description: 'drinks' },
]

export const Cards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-7 bg-orange-300 h-full 
      w-full py-5 md:max-w-7xl md:flex justify-center">
      {images.map(image =>
        <Link href={`/${image.description === 'menu' ?
          `${image.description}/tip-of-day` :
          image.description}`}
          className="flex flex-col justify-end items-center">
          <Image
            className="object-cover rounded-xl"
            height={160}
            width={160}
            src={image.img}
            alt={`${image.description} image`} />
          <Texts text={image.description} styles="text-white text-2xl z-20 absolute drop-shadow-md" />
        </Link>)}
    </div>
  )
}