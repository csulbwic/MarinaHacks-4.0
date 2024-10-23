import styles from "../styles/pillars.module.css"
import React from 'react';

export const Pillars = () => {
  return (
    <>
    <div id="pillars" className={styles.pillarsContainer}>
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-extrabold text-[#46494C] mb-20">
          Pillars
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        
        {[
          {
            title: "Hacker's Favorite",
            description: "most memorable and favorite project!"
          },
          {
            title: "Best Social Goods",
            description: "to the project that focuses the best on addressing social issues such as climate change, renewable energy, waste reduction, and sustainable practices!"
          },
          {
            title: "Best Entertainment",
            description: "to the project that has the best entertainment product (music, gaming, art, food, culture, outdoor activities, physical activities, fashion, and beauty)!"
          },
          {
            title: "Best UI/UX",
            description: "best project with the most intuitive, user-friendly, and interface design!"
          },
          {
            title: "Best Technical",
            description: "best project for the most advanced, challenging, and difficulty in implementation!"
          }
        ].map((pillar, index) => (
          <div key={index} className={`${styles.pillarsBox} w-full h-[300px] flex flex-col`}>
            <h2 className="text-3xl font-extrabold mb-10 text-center" style={{ color: '#46494C' }}>
              {pillar.title}
            </h2>
            <p className="text-1xl font-bold text-center text-white flex-grow flex items-center justify-center px-4">
              {pillar.description}
            </p>
          </div>
        ))}

      </div>

    </div>
    </> 
  );
};
