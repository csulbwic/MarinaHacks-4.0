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
            src={"/images/Prize_Jellyfish.png"}
            alt="First Prize"
            width="450"
            height="450"
          />
          <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-[47%] -translate-y-[200%] text-center">
            First Prize
          </h1>
        </div>

        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="Second Prize"
            width="450"
            height="450"
          />
          <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-[47%] -translate-y-[135%] text-center">
            Second Prize
          </h1>
        </div>

        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="Third Prize"
            width="450"
            height="450"
          />
          <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-[47%] -translate-y-[200%] text-center">
            Third Prize
          </h1>
        </div>
      </div>
    </div>
  )
}