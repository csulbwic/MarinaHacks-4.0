import styles from '../styles/info.module.css';

export const Info = () => {
  return (
    <div id="info" className={`${styles.infoContainer} text-center`}>
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