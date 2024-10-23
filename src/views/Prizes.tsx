import Link from 'next/link'
import Image from 'next/image'
import styles from "@/styles/prizes.module.css";
import {PrizeBubbleComponent} from "../components/PrizeBubbleComponent"
import { Prize } from "@/Data/prize"





export const Prizes = () => {
  return (
    <div id="prizes" className="flex flex-col justify-center items-center pt-16 gap-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-extrabold text-[#0F516F] mt-20 mb-2 ">
          Prizes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
          {Prize.map((item, index) => (
              <PrizeBubbleComponent
                name={item.name}
                img={item.PrizeImg} 
                key={index}
              />
            ))}
          
        </div>
      </div>
      {/* Flex container for the jellyfish images and text */}

      
    </div>
  )
}