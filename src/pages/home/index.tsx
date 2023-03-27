import PastWinners from "@/views/PastWinners"
import Pillars from "@/views/Pillars"
import Contact from "@/views/Contact"
import Faq from "@/views/Faq"
import Sponsors from "@/views/Sponsors"

const Home = () => {
  return(
    <div className="h-screen">
      <Pillars />
      <PastWinners />
      <Sponsors />
      <Faq />
      <Contact />
    </div>
  )
}

export default Home