import { FaRegHandshake, FaRegHeart, FaTv } from "react-icons/fa";

export const Pillars = () => {
  return (
    <div
      id="pillars"
      className="flex flex-col justify-center items-center pt-12"
    >
      <h1 className="text-5xl font-bold text-[#57417A] mt-20 mb-2">Pillars</h1>
      <p className="text-3xl font-bold text-[#3A2857]">
        Developer goals go here
      </p>
      <div className="container flex flex-col justify-center items-center gap-6 mb-10 relative z-10">
        <div className="w-full m-5 flex flex-row justify-start items-center rounded-2xl p-2 bg-[#A798FF]">
          <h1 className="text-5xl my-6 w-4/12 text-center">
            Hackers' Favorites
          </h1>
          <h1 className="text-8xl my-6 w-1/12">: </h1>
          <p className="text-2xl w-5/12 text-bold text-center flex items-center justify-start">
            {"Pillar description goes here"}
          </p>
        </div>
        <div className="w-full m-5 flex flex-row-reverse justify-start items-center rounded-2xl p-2 bg-[#8496FE]">
          <h1 className="text-5xl my-6 w-4/12 text-center">
            Best Social Goods
          </h1>
          <h1 className="text-8xl pl-6 my-6 w-1/12">{":"}</h1>
          <p className="text-2xl w-6/12 text-bold text-center">
            {"Pillar description goes here"}
          </p>
        </div>
        <div className="w-full m-5 flex flex-row justify-start items-center rounded-2xl p-2 bg-[#6085F2]">
          <h1 className="text-5xl my-6 w-4/12 text-center">
            Best Entertainment
          </h1>
          <h1 className="text-8xl pl-6 my-6 w-1/12">{":"}</h1>
          <p className="text-2xl w-6/12 text-bold text-center">
            {"Pillar description goes here"}
          </p>
        </div>
      </div>
    </div>
  );
};
