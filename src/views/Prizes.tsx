import Link from 'next/link'
import Image from 'next/image'

export const Prizes = () => {
  return (
    <div id="prizes" className="flex flex-col justify-center items-center pt-16 gap-16">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-extrabold text-[#0F516F] mt-20 mb-2 ">
          Prizes
        </h1>
      </div>
      {/* Flex container for the jellyfish images and text */}
      <div className="flex justify-center items-center gap-10">
        {/* 2020 Winners */}
        <div className="relative">
          <Image
            src={"/images/speakers_charger_jellyfish.png"}
            alt="First Prize"
            width="450"
            height="450"
          />
    
        </div>

        <div className="relative">
          <Image
            src={"/images/mouse_jellyfish.png"}
            alt="Second Prize"
            width="450"
            height="450"
          />
        </div>

        <div className="relative">
          <Image
            src={"/images/speakers_jellyfish.png"}
            alt="Third Prize"
            width="450"
            height="450"
          />

        </div>
      </div>
    </div>
  )
}