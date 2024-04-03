import { useState } from "react";
import { questions } from "@/Data/questions";
import { FaChevronDown } from "react-icons/fa";

type FaqItem = {
  question: string;
  answer: string;
};

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleActive = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  return (
    <div id="faq" className="flex flex-col justify-center items-center">
      <h1 className="container mx-auto text-4xl font-bold text-white mt-20 mb-6 drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)]">
        Frequently Asked Questions
      </h1>
      <div className="container mx-auto my-2 p-12 rounded-[50px] bg-[#D8D3FF] opacity-88">
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
                <span className="text-3xl font-bold text-black text-left">
                  {item.question}
                </span>
                <FaChevronDown
                  className={`h-6 w-6 text-black transition-transform transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-max-height ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-12 pt-6 text-xl text-black">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
