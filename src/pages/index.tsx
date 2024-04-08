import { Landing } from "@/components"
import { Contact, Faq, Info, Application, Prizes, Pillars, Sponsors, Team} from "@/views"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-mhblue via-mhpink-200 to-mhpurple-100">
      <Landing />
      <Info />
      <Application />
      <Pillars />
      <Prizes />
      <Team />
      <Sponsors />
      <Faq />
      <Contact />
    </div>
  )
}
