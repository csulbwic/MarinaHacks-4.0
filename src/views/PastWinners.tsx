import Link from 'next/link'

export const PastWinners = () => {
  return (
    <div id="pastwinners" className="flex flex-col justify-center items-center pt-16 gap-16">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-bold text-black opacity-50">
          Past Winners
        </h1>
      </div>
      <div className='flex flex-row justify-center items-center gap-32'>
        <div className="absolute h-16 w-7/12 rounded-lg bg-mhblue"></div>
        <div className=" mask mask-star-2 flex-col justify-center items-center p-16 rounded-xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <h1 className="text-2xl text-white text-center">
            2020
          </h1>
          <h1 className="text-2xl text-white text-center">
            Winners
          </h1>
        </div>
        <div className=" mask mask-star-2 flex-col justify-center items-center p-16 rounded-xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <h1 className="text-2xl text-white text-center">
            2021
          </h1>
          <h1 className="text-2xl text-white text-center">
            Winners
          </h1>
        </div>
        <div className=" mask mask-star-2 flex-col justify-center items-center p-16 rounded-xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <h1 className="text-2xl text-white text-center">
            2022
          </h1>
          <h1 className="text-2xl text-white text-center">
            Winners
          </h1>
        </div>
        <div className=" mask mask-star-2 flex-col justify-center items-center p-16 rounded-xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <h1 className="text-2xl text-white text-center">
            2023
          </h1>
          <h1 className="text-2xl text-white text-center">
            Devost
          </h1>
        </div>
      </div>

    </div>
  )
}