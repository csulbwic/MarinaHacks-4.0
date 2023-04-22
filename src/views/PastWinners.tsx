export const PastWinners = () => {
  return(
    <div className="flex flex-col justify-center items-center pt-16 gap-16">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-bold text-black opacity-50">
          Past Winners
        </h1>
        </div>

      <div className='flex-row items-center'>
        <div className=" mask mask-star-2 flex-col justify-center items-center p-12 rounded-xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <h1 className="text-2xl text-white place-self-stretch">
            2022
          </h1>
          <h1 className="text-2xl text-white">
            Winners
          </h1>
        </div>
      </div>
    </div>
  )
}