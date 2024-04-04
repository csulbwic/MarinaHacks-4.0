import { Contact, Faq, Info, Application, Prizes, Pillars, Sponsors, Team} from "@/views"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-mhblue via-mhpink-200 to-mhpurple-100">
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
