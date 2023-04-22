import { Contact, Faq, PastWinners, Pillars, Sponsors } from "@/views"

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-mhblue via-mhpink200 to-mhpurple100">
      <Pillars />
      <PastWinners />
      <Sponsors />
      <Faq />
      <Contact />
    </div>
  )
}
