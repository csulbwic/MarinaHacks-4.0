import Image from 'next/image'
export const Info = () => {
  return (
    <div id="home" className="flex flex-col justify-center items-center pt-16 gap-16">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/images/logo_stacked.png"}
          alt='logo'
          width="400"
          height="400"
          className="object-contain"
        />
        <h1 className="text-6xl font-bold text-mhpurple-400">
          April 21st - 22rd, 2023
        </h1>
      </div>
      <div className="flex justify-center items-center gap-24">
        <div className=" flex flex-col w-96 justify-center items-center p-6 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <h1 className="text-2xl pb-6">
            Attend MarinaHacks 3.0
          </h1>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfLktsjhdhQil4zA0cEiXslVB_OATcziWzM8d66v2YLpL1W8A/closedform'>
            <button className="btn btn-primary rounded-full text-xl font-thin bg-purple-900/50">
              Apply Now
            </button>
          </a>
        </div>
        <div className=" flex flex-col w-96 justify-center items-center p-6 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <h1 className="text-2xl pb-6">
            Volunteer at MarinaHacks 3.0
          </h1>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSf0nTpt80nF6AcJYCSSpwemOtVZlxumAgxxGqzYO0TFIm9C1A/closedform'>
            <button className="btn btn-primary rounded-full text-xl font-thin bg-purple-900/50">
              Apply Now
            </button>
          </a>
        </div>
      </div>
      <div className="text-mhpurple-400 font-bold flex flex-col gap-8 w-5/6">
        <p className="text-2xl">
          {"Women in Computing is hosting MarinaHacks: California State University.-Long Beach's annual women-centric hackathon- This free event is dedicated to bringing together women to hone their skills, develop confidence and fill the gender gap within the competitive tech industry-"}
        </p>
        <h1 className="text-5xl">
          Marinahacks 3.0
        </h1>
        <p className="text-2xl">
          {"This year's MarinaHacks will take place as fully in person 24-hour event from April 22-23rd in the CSULB USU Ballrooms. You will be able to win prizes, network with other students, attend workshops (i.e. Google, Cisco, etc.), in order to build your resume and most importantly have fun!"}
        </p>
      </div>
    </div>
  )
}