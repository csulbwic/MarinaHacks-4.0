import styles from '../styles/info.module.css';
import Image from 'next/image';

export const Info = () => {
  return (
    <div id="info" className={`${styles.infoContainer} text-center`}>
      <div className="flex items-center justify-center mb-20">
 
      <Image 
        src="/images/flower.png" 
        alt="Flower Left" 
        width={40} 
        height={40} 
        className="mr-10"  
      />
      

      <h1 className="text-6xl font-extrabold text-[#46494C] text-center">
        About MarinaHacks
      </h1>


      <Image 
        src="/images/flower.png" 
        alt="Flower Right" 
        width={40} 
        height={40} 
        className="ml-10"  
      />
      </div>



      <p className="text-2xl" style={{ color: '#46494C'}}>
        {"Women in Computing is hosting MarinaHacks: California State University Long Beach's annual women-centric hackathon! This free event is dedicated to bringing together women to hone their skills, develop confidence and fill the gender gap within the competitive tech industry."}
      </p>
      <br />
      <br />
      <p className="text-2xl" style={{ color: '#46494C'}}>
        {"\nThis semester's MarinaHacks 4.0 will take place on October 26th-27th. You will be able to win prizes, network with other students and attend workshops in order to build your resume and most importantly have fun!"}
      </p>
    </div>
  )
}