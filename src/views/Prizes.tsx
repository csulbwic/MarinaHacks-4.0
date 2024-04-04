import Link from 'next/link'
import Image from 'next/image'

export const Prizes = () => {
  return (
    <div id="prizes" className="flex flex-col justify-center items-center pt-16 gap-16">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-extrabold text-[#0F516F] mt-20 mb-2 pb-10">
          Prizes
        </h1>
      </div>
      {/* Flex container for the jellyfish images and text */}
      <div className="flex justify-center items-center gap-10">
        {/* 2020 Winners */}
        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="2020 Winners"
            width="400"
            height="400"
          />
          <h1 className="text-5xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            2020 Winners
          </h1>
        </div>

        {/* 2021 Winners */}
        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="2021 Winners"
            width="400"
            height="400"
          />
          {/* You can add text for 2021 Winners here */}
        </div>

        {/* 2022 Winners */}
        <div className="relative">
          <Image
            src={"/images/Prize_Jellyfish.png"}
            alt="2022 Winners"
            width="400"
            height="400"
          />
          {/* You can add text for 2022 Winners here */}
        </div>
      </div>
    </div>
  )
}