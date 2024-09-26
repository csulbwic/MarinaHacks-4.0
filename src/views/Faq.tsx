import { useState } from "react";
import { questions } from "@/Data/questions";
import { FaChevronDown } from "react-icons/fa";
import style from "@/styles/faq.module.css"

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
    <div id="faq" className= {`flex flex-col justify-center items-center ${style.faqContainer}`}>
      <h1 className="text-6xl text-center font-extrabold text-[#45494C] mb-2 pb-10">
        FAQ
      </h1>
      <div className="container mx-auto my-2 p-12 px-20 rounded-[50px] bg-[#FDBBD9]">
        <div className="grid gap-4">
          {questions.map((item, index) => (
            <div
              className={`my-3 p-5 pb-[50px]  ${
                activeIndex === index ? "rounded-[20px] bg-[#F26EAC]" : ""
              }`}
              key={index}
            >
              <button
                className="flex items-center w-full justify-between"
                onClick={() => toggleActive(index)}
              >
                <span className="text-2xl font-bold text-[#45494C]  text-left pl-10 pr-10">
                  {item.question}
                </span>
                <FaChevronDown
                  className={`h-6 w-6 text-[#45494C] transition-transform transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-12 pt-6 text-xl font-bold text-[#45494C] ">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
