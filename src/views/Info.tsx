import Image from 'next/image'
import styles from '../styles/info.module.css';
export const Info = () => {
  return (
    <div id="info" className={`flex flex-col justify-center items-center pt-20 gap-16 ${styles.infoContainer}`}>
      
      <div >
        <Image
        src="/images/MarinaHacks_3.5.png" 
        alt="About Logo"
        width={500} 
        height={500} 
        objectFit="contain"
      />
      </div>

      <div className="flex flex-row justify-center items-start max-w-4xl mx-auto text-center">
          
          <div className="text-mhpurple-400 font-bold flex flex-col gap-8 max-w-4xl mx-auto text-center">
            <p className="text-2xl" style={{ color: '#7275B6'}}>
              {"Women in Computing is hosting MarinaHacks: California State University Long Beach's annual women-centric hackathon! This free event is dedicated to bringing together women to hone their skills, develop confidence and fill the gender gap within the competitive tech industry."}
            </p>
            <p className="text-2xl" style={{ color: '#7275B6'}}>
              {"This semester's MarinaHacks Mini will take place virtually as a 24-hour event from April 20-21st via Discord. You will be able to win prizes, network with other students, attend workshops, in order to build your resume and most importantly have fun!"}
            </p>
          </div>
      </div>
    </div>

    
  )
}