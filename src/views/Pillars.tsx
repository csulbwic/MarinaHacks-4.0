import { FaRegHandshake, FaRegHeart, FaTv } from "react-icons/fa";
import Image from "next/image";

export const Pillars = () => {
  return (
    <>
    <div
      id="pillars"
      className="flex-col justify-center items-center pt-12 hidden sm:flex"
    >
      <h1 className="text-6xl font-extrabold text-[#0F516F] mt-20 mb-2 pb-10">Pillars</h1>
      <div className="container flex flex-col justify-center items-center gap-6 mb-10 relative z-10">
        <div className="w-full m-5 flex flex-row justify-start items-center rounded-2xl p-2 bg-[#A798FF]">
          <h1 className="text-3xl font-bold my-6 w-4/12 text-center text-white">
            {"Hacker's Favorites"}
          </h1>
          <h1 className="text-8xl my-6 w-1/12">: </h1>
          <p className="text-1xl w-6/12 text-bold text-left flex items-center justify-start text-white">
            {"Build something breathtaking that everyone will love! Make it smart, make it useful, and most importantly, make it fun!"}
          </p>
          <Image src="/images/turtle_with_heart.png" width={100} height={100} alt="Turtle with Heart" className="animate-pulse"/>
        </div>
        <div className="w-full m-5 flex flex-row justify-start items-center rounded-2xl p-2 bg-[#8496FE]">
          <Image src="/images/shell.png" width={150} height={150} alt="Turtle with Heart" className="animate-bounce"/>
          <p className="text-1xl w-6/12 text-bold text-left flex items-center justify-start text-white">
            {"Innovation can spark a wave of positive change. Develop technology that can help improve our society or our enviroment!"}
          </p>
          <h1 className="text-8xl my-6 w-1/12">: </h1>
          <h1 className="text-3xl font-bold my-6 w-4/12 text-center text-white">
            {"Best Social Goods"}
          </h1>
        </div>
        <div className="w-full m-5 flex flex-row justify-start items-center rounded-2xl p-2 bg-[#6085F2]">
          <h1 className="text-3xl font-bold my-6 w-4/12 text-center text-white">
            {"Best Entertainment"}
          </h1>
          <h1 className="text-8xl pl-6 my-6 w-1/12">{":"}</h1>
          <p className="text-1xl w-6/12 text-bold text-left flex items-center justify-start text-white">
            {"Create technology that enhances engagement! This category focuses on individuality of the developer's technology, caputring everyone's attention! "}
          </p>
          <Image src="/images/Large_pink_shark.png" width={150} height={150} alt="Turtle with Heart" className="animate-spin"/>
        </div>
      </div>
    </div>



    <div id="pillars" className="flex flex-col justify-center items-center pt-12 sm:hidden">
      <h1 className="text-6xl font-extrabold text-[#0F516F] mt-20 mb-2 pb-10">Pillars</h1>
      <label className="swap swap-flip justify-center items-center w-fit h-fit mb-5">
        <input type="checkbox" />
        <div className="swap-on">
          <div className="card w-96 h-80 justify-center items-center bg-[#A798FF]">
            <p className="text-2xl w-9/12 text-bold text-left flex items-center justify-start text-white">
              {"Build something breathtaking that everyone will love! Make it smart, make it useful, and most importantly, make it fun!"}
            </p>
          </div>
        </div>
        <div className="swap-off">
          <div className="card w-96 h-80 justify-center items-center bg-[#A798FF]">
            <h1 className="text-3xl font-bold my-6 w-9/12 text-center text-white">
             {"Hacker's Favorites"}
            </h1>
            <Image src="/images/turtle_with_heart.png" width={100} height={100} alt="Turtle with Heart" className="animate-pulse"/>
          </div>
        </div>
      </label>
      <label className="swap swap-flip w-fit h-fit mb-5">
        <input type="checkbox" />
        <div className="swap-on">
          <div className="card w-96 h-80 justify-center items-center bg-[#8496FE]">
            <p className="text-2xl w-9/12 text-bold text-left flex items-center justify-start text-white">
             {"Innovation can spark a wave of positive change. Develop technology that can help improve our society or our enviroment!"}
            </p>
          </div>
        </div>
        <div className="swap-off">
          <div className="card w-96 h-80 justify-center items-center bg-[#8496FE]">
            <h1 className="text-3xl font-bold my-6 w-9/12 text-center text-white">
             {"Best Social Goods"}
           </h1>
            <Image src="/images/shell.png" width={150} height={150} alt="Turtle with Heart" className="animate-bounce"/>
          </div>
        </div>
      </label>
      <label className="swap swap-flip w-fit h-fit mb-5">
        <input type="checkbox" />
        <div className="swap-on">
          <div className="card w-96 h-80 justify-center items-center bg-[#6085F2]">
            <p className="text-2xl w-9/12 text-bold text-left flex items-center justify-start text-white">
             {"Create technology that enhances engagement! This category focuses on individuality of the developer's technology, caputring everyone's attention! "}
            </p>
          </div>
        </div>
        <div className="swap-off">
          <div className="card w-96 h-80 justify-center items-center bg-[#6085F2]">
            <h1 className="text-3xl font-bold my-6 w-9/12 text-center text-white">
             {"Best Entertainment"}
           </h1>
            <Image src="/images/Large_pink_shark.png" width={150} height={150} alt="Turtle with Heart" className="animate-spin"/>
          </div>
        </div>
      </label>
    </div>
    </>
  );
};
``;
