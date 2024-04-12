import Image from 'next/image'
import styles from '../styles/info.module.css';
export const Info = () => {
  return (
    <div className=" h-full w-full bg-[url('../../public/images/mermaid.png')] bg-center bg-opacity-5">
    <div id="info" className={`flex flex-col justify-center items-center pt-16 gap-16 ${styles.infoContainer}`}>
      <div style = {{minHeight: '300px'}}>
        <Image
        src="/images/MarinaHacks_3.5.png" 
        alt="About Logo"
        width={500} 
        height={500} 
        objectFit="contain"
      />
      </div>

      <div className="flex flex-row justify-center items-start max-w-4xl mx-auto text-center bg-[#eefdff] bg-opacity-50">
          
          <div className="text-mhpurple-400 font-bold flex flex-col gap-8 max-w-4xl mx-auto text-center">
            <p className="text-2xl" style={{ color: '#7275B6'}}>
              {"Women in Computing is hosting MarinaHacks: California State University Long Beach's annual women-centric hackathon! This free event is dedicated to bringing together women to hone their skills, develop confidence and fill the gender gap within the competitive tech industry."}
            </p>
            <p className="text-2xl" style={{ color: '#7275B6'}}>
              {"This semester's MarinaHacks Mini will take place virtually as a 24-hour event from April 13-14th via Discord. You will be able to win prizes, network with other students, attend workshops, in order to build your resume and most importantly have fun!"}
            </p>
          </div>
      </div>
      </div>
    </div>

    
  )
}