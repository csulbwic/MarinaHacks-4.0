import Image from 'next/image'

export const Application = () => {
    return (
    
    <div id="application" className="flex flex-col justify-center items-center pt-20">

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-extrabold text-[#0F516F] mt-20 mb-2">
            Apply for Hackathon
        </h1>
        <h1 className="text-4xl font-bold mb-5" style={{ color: '#7275B6' }}>
            April 20th - 21st, 2024
        </h1>
      </div>

        <div className="flex flex-col md:flex-row md:carousel md:carousel-end md:w-11/12 md:rounded-box justify-center items-center text-center gap-10 mt-5">
        <div className="flex flex-col md:carousel-item w-96 h-60 justify-center items-center p-10 rounded-2xl" style={{backgroundColor: '#C2BBFF'}}>
            <h1 className="text-2xl pb-6 font-bold" style={{ color: '#0F516F' }}>
            Become a Participant
            </h1>
            <div className="h-4"></div>
            <p className="text-white font-bold text-center pb-2">Apply so that you can join a team and compete with other hackers.</p>
            <div className="h-4"></div>
            <div className="h-4"></div>

            <a href='https://bit.ly/3PUkw4R'>
            <button className="btn btn-primary rounded-full text-xl border-none" style={{ backgroundColor: '#7275B6' }}>
                Apply Now
            </button>
            </a>
        </div>

        <div className="flex flex-col md:carousel-item w-96 h-60 justify-center items-center p-10 rounded-2xl" style={{backgroundColor: '#C2BBFF'}}>

            <h1 className="text-2xl pb-6 font-bold" style={{ color: '#0F516F' }}>
            Become a Judge
            </h1>
            <div className="h-4"></div>
            <p className="text-white font-bold text-center pb-2">Apply to be a judge that will rate and rank the work of all hackers.</p>
            <div className="h-4"></div>
            <div className="h-4"></div>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSd-uMWQMbPGWr7lrueLpctAaYg23QsCSz92f9CtUcIVPZZqkg/viewform'>
            <button className="btn btn-primary rounded-full text-xl border-none" style={{ backgroundColor: '#7275B6' }}>
                Apply Now
            </button>
            </a>
        </div>

        <div className="flex flex-col md:carousel-item w-96 h-60 justify-center items-center p-10 rounded-2xl" style={{backgroundColor: '#C2BBFF'}}>

            <h1 className="text-2xl pb-6 font-bold" style={{ color: '#0F516F' }}>
            Become a Guest Speaker
            </h1>
            <div className="h-4"></div>
            <p className="text-white font-bold text-center pb-2">Apply if you want to provide insight as a guest speaker during the event.</p>
            <div className="h-4"></div>
            <div className="h-4"></div>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSd-uMWQMbPGWr7lrueLpctAaYg23QsCSz92f9CtUcIVPZZqkg/viewform'>
            <button className="btn btn-primary rounded-full text-xl border-none" style={{ backgroundColor: '#7275B6' }}>
                Apply Now
            </button>
            </a>
        </div>

        </div>
            </div>
    
    )
}