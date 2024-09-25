import { Landing } from "@/components"
import { Contact, Faq, Info, Application, Prizes, Pillars, Sponsors, Team} from "@/views"

export default function Home() {
  return (
    <div>
      <Landing />
      <Info />
      <Application />
      <Team />
      <Pillars />
      <Prizes />
      <Sponsors />
      <Faq />
      <Contact />
    </div>
  )
}
