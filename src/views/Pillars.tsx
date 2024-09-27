import styles from "@/styles/pillars.module.css"


export const Pillars = () => {
  return (
    <>
    <div id="pillars" className={styles.pillarsContainer}>
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-extrabold text-[#46494C] mb-20">
          Pillars
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-stretch gap-8">
        
        <div className={`${styles.pillarsBox} flex-1 min-w-[250px] max-w-[350px] flex flex-col`}>
              <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ color: '#46494C' }}>
                Hacker's Favorite
              </h2>
              <p className="text-1xl font-bold text-center text-white flex-grow flex items-center justify-center">
                {"build something breathtaking that everyone will love! make it smart, make it useful, and make it fun!"}
              </p>
        </div>

        <div className={`${styles.pillarsBox} flex-1 min-w-[250px] max-w-[350px] flex flex-col`}>
              <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ color: '#46494C' }}>
                Best Social Goods
              </h2>
              <p className="text-1xl font-bold text-center text-white flex-grow flex items-center justify-center">
              {"innovation can spark a wave of positive change. develop technology that can help improve our society or our environment!"}
              </p>
        </div>

        <div className={`${styles.pillarsBox} flex-1 min-w-[250px] max-w-[350px] flex flex-col`}>
              <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ color: '#46494C' }}>
                Best Entertainment
              </h2>
              <p className="text-1xl font-bold text-center text-white flex-grow flex items-center justify-center">
                {"create technology that enhances engagement! this category focuses on individuality of the developer's technology, caputring everyone's attention!"}
              </p>
        </div>

      </div>

    </div>

    {/*
    <div id="pillars" className="flex flex-col justify-center items-center sm:hidden">
      <h1 className="text-6xl font-extrabold text-[#46494C] my-20">Pillars</h1>
      <label className="swap swap-flip justify-center items-center w-fit h-fit mb-5">
        <input type="checkbox" />
        <div className="swap-on">
          <div className="card w-96 h-80 justify-center items-center bg-[#FDBBD9]">
            <p className="text-2xl w-9/12 text-bold font-bold text-center flex items-center justify-start text-white">
              {"build something breathtaking that everyone will love! make it smart, make it useful, and make it fun!"}
            </p>
          </div>
        </div>

        <div className="swap-off">
          <div className="card w-96 h-80 justify-center items-center bg-[#FDBBD9]">
            <h1 className="text-3xl font-bold my-6 w-9/12 text-center text-white">
             {"Hacker's Favorites"}
            </h1>
          </div>
        </div>
      </label>
      <label className="swap swap-flip w-fit h-fit mb-5">
        <input type="checkbox" />
        <div className="swap-on">
          <div className="card w-96 h-80 justify-center items-center bg-[#EB9AC1]">
            <p className="text-2xl w-9/12 text-bold font-bold text-center flex items-center justify-start text-white">
             {"innovation can spark a wave of positive change. develop technology that can help improve our society or our environment!"}
            </p>
          </div>
        </div>
        <div className="swap-off">
          <div className="card w-96 h-80 justify-center items-center bg-[#EB9AC1]">
            <h1 className="text-3xl font-bold my-6 w-9/12 text-center text-white">
             {"Best Social Goods"}
           </h1>
          </div>
        </div>
      </label>
      <label className="swap swap-flip w-fit h-fit mb-5">
        <input type="checkbox" />
        <div className="swap-on">
          <div className="card w-96 h-80 justify-center items-center bg-[#F26EAC]">
            <p className="text-2xl w-9/12 text-bold font-bold text-center flex items-center justify-start text-white">
             {"create technology that enhances engagement! this category focuses on individuality of the developer's technology!"}
            </p>
          </div>
        </div>
        <div className="swap-off">
          <div className="card w-96 h-80 justify-center items-center bg-[#F26EAC]">
            <h1 className="text-3xl font-bold my-6 w-9/12 text-center text-white">
             {"Best Entertainment"}
           </h1>
          </div>
        </div>
      </label>
    </div> */}
    </> 
  );
};
