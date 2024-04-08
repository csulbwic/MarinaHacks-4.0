import Image from 'next/image'

export const Application = () => {
    return (
        
    <div id="info" className="flex flex-col justify-center items-center pt-16 gap-16">

<div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold pt-10" style={{ color: '#0F516F' }}>
            Apply for Hackathon
        </h1>
        <h1 className="text-4xl font-bold pt-5" style={{ color: '#7275B6' }}>
            April 20th - 21st, 2024
        </h1>
      </div>

      <div className="flex-shrink-0"  style={{ transform: 'translateX(15px)'}}>
          <Image
            src="/images/mermaid.png" // Replace with the correct path to your mermaid image
            alt="Mermaid"
            width={400} // Set the desired width
            height={400} // Set the desired height
            className="opacity-75" // Apply the transparency
          />
        </div>

      <div className="flex justify-center items-center gap-24">
      <div className="flex flex-col w-96 justify-center items-center p-6 rounded-2xl bg-purple-400">
          <h1 className="text-2xl pb-6">
            Become a Participant
          </h1>
          <div className="h-4"></div>
          <p className="text-white text-lg">Apply so that you can join a team and compete with other hackers.</p>
          <div className="h-4"></div>
          <div className="h-4"></div>

          <a href='https://docs.google.com/forms/d/e/1FAIpQLSc4r0qtlzA3Kip3WVEgyN_RnBzBUq3TvY_GOkCQCCFPiEXJeQ/viewform'>
            <button className="btn btn-primary rounded-full text-xl font-thin bg-purple-900/50">
              Apply Now
            </button>
          </a>
        </div>

        <div className="flex flex-col w-96 justify-center items-center p-6 rounded-2xl bg-purple-400">

          <h1 className="text-2xl pb-6">
            Become a Judge
          </h1>
          <div className="h-4"></div>
          <p className="text-white text-lg">Apply to be a judge that will rate and rank the work of all hackers.</p>
          <div className="h-4"></div>
          <div className="h-4"></div>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSd-uMWQMbPGWr7lrueLpctAaYg23QsCSz92f9CtUcIVPZZqkg/viewform'>
            <button className="btn btn-primary rounded-full text-xl font-thin bg-purple-900/50">
              Apply Now
            </button>
          </a>
        </div>

        <div className="flex flex-col w-96 justify-center items-center p-6 rounded-2xl bg-purple-400">

          <h1 className="text-2xl pb-6">
            Become a Guest Speaker
          </h1>
          <div className="h-4"></div>
          <p className="text-white text-lg">Apply if you want to provide insight as a guest speaker during the event.</p>
          <div className="h-4"></div>
          <div className="h-4"></div>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSflLAa_6X-5Qjov5_qzQ71g7UObejnXUozxYXlbDsD_tKjhrw/viewform'>
            <button className="btn btn-primary rounded-full text-xl font-thin bg-purple-900/50">
              Apply Now
            </button>
          </a>
        </div>

      </div>
      {/* <div className="flex flex-row justify-center items-start max-w-4xl mx-auto text-center">
          
          <div className="text-mhpurple-400 font-bold flex flex-col gap-8 max-w-4xl mx-auto text-center">
            <p className="text-2xl" style={{ color: '#7275B6'}}>
              {"Women in Computing is hosting MarinaHacks: California State University Long Beach's annual women-centric hackathon! This free event is dedicated to bringing together women to hone their skills, develop confidence and fill the gender gap within the competitive tech industry."}
            </p>
            <p className="text-2xl" style={{ color: '#7275B6'}}>
              {"This semester's MarinaHacks Mini will take place virtually as a 24-hour event from April 20-21st via Discord. You will be able to win prizes, network with other students, attend workshops, in order to build your resume and most importantly have fun!"}
            </p>
          </div>
      </div> */}
    </div>
    )
}