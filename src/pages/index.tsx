import { Landing } from "@/components"
import { Contact, Faq, Info, Application, Prizes, Pillars, Sponsors, Team} from "@/views"
import Bubbles from "@/components/Bubbles/Bubbles"

export default function Home() {
  return (
    <div>
      <Bubbles />
      <Landing />
      <Info />
      <Application />
      <Team />
      <Pillars />
      <Prizes/>
      <Faq />
      <Contact />
    </div>
  )
}
