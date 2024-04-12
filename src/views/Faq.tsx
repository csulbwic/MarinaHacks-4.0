import { useState } from "react";
import { questions } from "@/Data/questions";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Shark from "../../public/images/shark-logo.png"

type FaqItem = {
  question: string;
  answer: string;
};

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div id="faq" className="flex flex-col justify-center items-center ">
      <h1 className="text-6xl text-center font-extrabold text-[#0F516F] mt-20 mb-2 pb-10 pt-20">
        Frequently Asked Questions
      </h1>
      <div className="container mx-auto my-2 p-12 rounded-[50px] bg-[#bcc5f9] opacity-88">
        <div className="grid gap-4">
          {questions.map((item, index) => (
            <div
              className={`my-3 p-5 pb-[50px]  ${
                activeIndex === index ? "rounded-[20px] bg-[#DAF6FF]" : ""
              }`}
              key={index}
            >
              <button
                className="flex items-center w-full justify-between"
                onClick={() => toggleActive(index)}
              >
                <span className="text-2xl font-bold text-[#0F516F]  text-left">
                  {item.question}
                </span>
                <FaChevronDown
                  className={`h-6 w-6 text-[#0F516F] transition-transform transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-12 pt-6 text-xl font-bold text-[#0F516F] ">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='z-10 relative bottom-24 -left-1/3 sm:-left-2/5 md:-left-[42%] -rotate-12'>
            <Image src={Shark} alt="Pink Shark" className='w-4/5 h-4/5'></Image>
        </div>
    </div>
  );
};
