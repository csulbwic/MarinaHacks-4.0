import { FaRegHandshake, FaRegHeart, FaTv } from "react-icons/fa"

export const Pillars = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12">
      <h1 className="text-6xl font-bold text-black opacity-50">
        Pillars
      </h1>
      <p className="text-2xl font-bold text-black opacity-50">
        This year at MarinaHacks, develop an innovative project that targets one of our competition pillars.
      </p>
      <div className="flex flex-row justify-center items-center gap-6 my-10">
        <div className="w-96 flex flex-col justify-center items-center rounded-2xl p-6 bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <FaRegHandshake size='10rem' />
          <h1 className="text-3xl my-6">
            Connecting
          </h1>
          <p className="text-1xl text-center">
            Social distancing & virtual learning doesn't mean we should be disconnected. Make technology that can bring us together.
          </p>
        </div>
        <div className="w-96 flex flex-col justify-center items-center rounded-2xl p-6 bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <FaRegHeart size='10rem' />
          <h1 className="text-3xl my-6">
            Well-being
          </h1>
          <p className="text-1xl text-center">
          COVID-19 has changed the lives of many in our communities. Create technology that can improve our own well-being, as well as the environment's.
          </p>
        </div>
        <div className="w-96 flex flex-col justify-center items-center rounded-2xl p-6 bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <FaTv size='10rem' />
          <h1 className="text-3xl my-6">
            Connecting
          </h1>
          <p className="text-1xl text-center">
          Throughout the pandemic, people have been finding different ways to channel their creativity. Develop technology that brings your creativity to life.
          </p>
        </div>
      </div>
    </div>
  )
}