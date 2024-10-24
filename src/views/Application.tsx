import styles from '../styles/application.module.css'

export const Application = () => {
    return (
    <div id="application" className={styles.applicationContainer}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-extrabold text-[#46494C] mb-20">
            Apply for Hackathon!
        </h1>
      </div>
      {/* Application Boxes */}
      <div className="flex flex-wrap justify-center items-stretch gap-8">
        {/* Participant Box */}
        <div className={`${styles.applicationBox} flex-1 min-w-[250px] max-w-[350px]`}>
          <h2 className="text-4xl font-extrabold mb-10 mr-5 ml-5" style={{ color: '#46494C' }}>
            Participant
          </h2>
            <button className={`${styles.applicationButton} btn btn-primary rounded-full text-2xl border-none px-10 py-2`} style={{ backgroundColor: '#E276AA', textTransform: 'none' }}>
              closed
            </button>
        </div>

        {/* Mentor Box */}
        <div className={`${styles.applicationBox} flex-1 min-w-[250px] max-w-[350px]`}>
          <h2 className="text-4xl font-extrabold mb-10 mr-5 ml-5" style={{ color: '#46494C' }}>
            Mentor
          </h2>
            <button className={`${styles.applicationButton} btn btn-primary rounded-full text-2xl border-none px-10 py-2`} style={{ backgroundColor: '#E276AA', textTransform: 'none' }}>
              closed
            </button>
        </div>

        {/* Judge Box */}
        <div className={`${styles.applicationBox} flex-1 min-w-[250px] max-w-[350px]`}>
          <h2 className="text-4xl font-extrabold mb-10 mr-5 ml-5" style={{ color: '#46494C' }}>
            Judge
          </h2>
            <button className={`${styles.applicationButton} btn btn-primary rounded-full text-2xl border-none px-10 py-2`} style={{ backgroundColor: '#E276AA', textTransform: 'none' }}>
              closed
            </button>
        </div>

        {/* Volunteer Box */}
        <div className={`${styles.applicationBox} flex-1 min-w-[250px] max-w-[350px]`}>
          <h2 className="text-4xl font-extrabold mb-10 mr-5 ml-5" style={{ color: '#46494C' }}>
            Volunteer
          </h2>
            <button className={`${styles.applicationButton} btn btn-primary rounded-full text-2xl border-none px-10 py-2`} style={{ backgroundColor: '#E276AA', textTransform: 'none' }}>
              closed
            </button>
        </div>
      </div>
    </div>
    )
}
