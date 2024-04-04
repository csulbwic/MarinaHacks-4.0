import { Contact, Faq, Info, Prizes, Pillars, Sponsors, Team} from "@/views"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-mhblue via-mhpink-200 to-mhpurple-100">
      <Info />
      <Pillars />
      <Prizes />
      <Team />
      <Sponsors />
      <Faq />
      <Contact />
    </div>
  )
}
