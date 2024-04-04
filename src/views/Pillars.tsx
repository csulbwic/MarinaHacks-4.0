import { FaRegHandshake, FaRegHeart, FaTv } from "react-icons/fa";

export const Pillars = () => {
  return (
    <div
      id="pillars"
      className="flex flex-col justify-center items-center pt-12"
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
        </div>
        <div className="w-full m-5 flex flex-row justify-start items-center rounded-2xl p-2 bg-[#8496FE]">
          <h1 className="text-3xl font-bold my-6 w-4/12 text-center text-white">
            {"Best Social Goods"}
          </h1>
          <h1 className="text-8xl my-6 w-1/12">: </h1>
          <p className="text-1xl w-6/12 text-bold text-left flex items-center justify-start text-white">
            {"Innovation can spark a wave of positive change. Develop technology that can help improve our society or our enviroment!"}
          </p>
        </div>
        <div className="w-full m-5 flex flex-row justify-start items-center rounded-2xl p-2 bg-[#6085F2]">
          <h1 className="text-3xl font-bold my-6 w-4/12 text-center text-white">
            {"Best Entertainment"}
          </h1>
          <h1 className="text-8xl pl-6 my-6 w-1/12">{":"}</h1>
          <p className="text-1xl w-6/12 text-bold text-left flex items-center justify-start text-white">
            {"Create technology that enhances engagement! This category focuses on individuality of the developer's technology, caputring everyone's attention! "}
          </p>
        </div>
      </div>
    </div>
  );
};
``;
