import styles from "../styles/pillars.module.css"


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
                Hacker&#39;s Favorite
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
                {"create technology that enhances engagement! this category focuses on individuality of the developers technology, caputring everyones attention!"}
              </p>
        </div>

      </div>

    </div>
    </> 
  );
};
