import { Contact, Faq, PastWinners, Pillars, Sponsors } from "@/views"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-mhblue via-mhpink-200 to-mhpurple-100">
      <Pillars />
      <PastWinners />
      <Sponsors />
      <Faq />
      <Contact />
    </div>
  )
}
