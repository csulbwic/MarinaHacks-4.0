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
          <a href='https://forms.gle/meYKeGjFqy8HZN8B8' target="_blank" rel="noopener noreferrer" className="block text-center">
            <button className={`${styles.applicationButton} btn btn-primary rounded-full text-2xl border-none px-10 py-2`} style={{ backgroundColor: '#E276AA', textTransform: 'none' }}>
              apply here
            </button>
          </a>
        </div>

        {/* Mentor Box */}
        <div className={`${styles.applicationBox} flex-1 min-w-[250px] max-w-[350px]`}>
          <h2 className="text-4xl font-extrabold mb-10 mr-5 ml-5" style={{ color: '#46494C' }}>
            Mentor
          </h2>
          <a href='https://forms.gle/RbRnsLVi7Na4fpRbA' target="_blank" rel="noopener noreferrer" className="block text-center">
            <button className={`${styles.applicationButton} btn btn-primary rounded-full text-2xl border-none px-10 py-2`} style={{ backgroundColor: '#E276AA', textTransform: 'none' }}>
              apply here
            </button>
          </a>
        </div>

        {/* Judge Box */}
        <div className={`${styles.applicationBox} flex-1 min-w-[250px] max-w-[350px]`}>
          <h2 className="text-4xl font-extrabold mb-10 mr-5 ml-5" style={{ color: '#46494C' }}>
            Judge
          </h2>
          <a href='https://forms.gle/DkwLwAJmFNTM2JG9A' target="_blank" rel="noopener noreferrer" className="block text-center">
            <button className={`${styles.applicationButton} btn btn-primary rounded-full text-2xl border-none px-10 py-2`} style={{ backgroundColor: '#E276AA', textTransform: 'none' }}>
              apply here
            </button>
          </a>
        </div>

        {/* Volunteer Box */}
        <div className={`${styles.applicationBox} flex-1 min-w-[250px] max-w-[350px]`}>
          <h2 className="text-4xl font-extrabold mb-10 mr-5 ml-5" style={{ color: '#46494C' }}>
            Volunteer
          </h2>
          <a href='https://forms.gle/c8KpExyu8mynfgUW7' target="_blank" rel="noopener noreferrer" className="block text-center">
            <button className={`${styles.applicationButton} btn btn-primary rounded-full text-2xl border-none px-10 py-2`} style={{ backgroundColor: '#E276AA', textTransform: 'none' }}>
              apply here
            </button>
          </a>
        </div>
      </div>
    </div>
    )
}