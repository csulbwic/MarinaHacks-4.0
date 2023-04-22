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
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-black opacity-50 mt-20 mb-6">
        Fequently Asked Questions
      </h1>
      <div className="container mx-auto my-8 p-12 rounded-xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
        <div className="grid gap-4">
          {questions.map((item, index) => (
            <div key={index}>
              <button
                className="flex items-center w-full justify-between"
                onClick={() => toggleActive(index)}
              >
                <span className="text-2xl">{item.question}</span>
                <FaChevronDown
                className={`h-6 w-6 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
              </button>
              <div
                className={`overflow-hidden transition-max-height ${activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
              >
                <p className="px-12 pt-6 text-xl">{item.answer}</p>
              </div>
              <div className="divider"></div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}