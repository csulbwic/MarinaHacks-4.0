import { members } from "@/Data/members"
import { Profile } from "@/components"
import styles from "@/styles/team.module.css";

export const Team = () => {
    return (
      <div id ="team" className={styles.teamContainer}>

         <h1 className={`${styles.teamHeading} text-6xl mb-20`}>MarinaHacks Team</h1>

            <div>
                <h2 className={`${styles.teamSubHeading} ${styles.officersCommittee}`}>Women in Computing Officers</h2>
                <div className={styles.memberContainer}>
                    {/* Map Members of group member only */}
                    {members.filter((member) => member.group === 1).map((item, index) => {
                    return (
                        <Profile 
                            name={item.name} 
                            role={item.role} 
                            img={item.img} 
                            key={index}
                            committeeType="officersCommittee"
                             />
                    )
                    })}
                </div>
            </div>


        <div className={styles.committeeHeading}>
            <h2 className={`${styles.teamSubHeading} ${styles.websiteCommittee}`}>Website Committee</h2>
                <div className={styles.memberContainer}>
                    {/* Map Members of group member only */}
                    {members.filter((member) => member.group === 2).map((item, index) => {
                    return (
                        <Profile 
                            name={item.name} 
                            role={item.role} 
                            img={item.img} 
                            key={index}
                            committeeType="websiteCommittee"
                            />
                    )
                    })}
                </div>
        </div>
        
        

        <div className={styles.committeeHeading}>
            <h2 className={`${styles.teamSubHeading} ${styles.sponsorshipCommittee}`}>Sponsorship Committee</h2>
                <div className={styles.memberContainer}>
                    {/* Map Members of group member only */}
                    {members.filter((member) => member.group === 3).map((item, index) => {
                    return (
                        <Profile 
                            name={item.name} 
                            role={item.role} 
                            img={item.img} 
                            key={index}
                            committeeType="sponsorshipCommittee"
                            />
                    )
                    })}
                </div>
        </div>
      </div>
    )
  }
