import { members } from "@/Data/members"
import { Profile } from "@/components"
const Teams = () => {
  return (
    <div id="teams" className="bg-mhblue pt-8">
      <div className="transform rotate-180 w-full overflow-hidden">
        <svg className="relative block h-64 w-screen" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-mhpink-100"></path>
        </svg>
      </div>
      <div className="bg-mhpink-100 px-28">
        <h1 className="text-white text-4xl font-bold pb-6">Main Organizers</h1>
        <div className="flex flex-row flex-wrap gap-16">
          {/* Map Members of group member only */}
          {members.filter((member) => member.group === 1).map((item, index) => {
            return (
              <Profile name={item.name} role={item.role} img={item.img} />
            )
          })}
        </div>
      </div>
      <div className="transform rotate-180 w-full overflow-hidden bg-mhpink-100">
        <svg className="relative block h-64 w-screen" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-mhpink-300 "></path>
        </svg>
      </div>
      <div className="bg-mhpink-300 px-28">
        <h1 className="text-white text-4xl font-bold pb-6">Website Committee</h1>
        <div className="flex flex-row flex-wrap gap-16">
          {/* Map Members of group member only */}
          {members.filter((member) => member.group === 2).map((item, index) => {
            return (
              <Profile name={item.name} role={item.role} img={item.img} />
            )
          })}
        </div>
      </div>
      <div className="transform rotate-180 w-full overflow-hidden bg-mhpink-300">
        <svg className="relative block h-64 w-screen" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-mhpurple-200 "></path>
        </svg>
      </div>
      <div className="bg-mhpurple-200 px-28">
        <h1 className="text-white text-4xl font-bold pb-6">Sponsorship Committee</h1>
        <div className="flex flex-row flex-wrap gap-16">
          {/* Map Members of group member only */}
          {members.filter((member) => member.group === 3).map((item, index) => {
            return (
              <Profile name={item.name} role={item.role} img={item.img} />
            )
          })}
        </div>
      </div>
      <div className="transform rotate-180 w-full overflow-hidden bg-mhpurple-200">
        <svg className="relative block h-64 w-screen" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-mhpurple-400 "></path>
        </svg>
      </div>
      <div className="bg-mhpurple-400 px-28 pb-28">
        <h1 className="text-white text-4xl font-bold pb-6">Sponsorship Committee</h1>
        <div className="flex flex-row flex-wrap gap-16">
          {/* Map Members of group member only */}
          {members.filter((member) => member.group === 4).map((item, index) => {
            return (
              <Profile name={item.name} role={item.role} img={item.img} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Teams