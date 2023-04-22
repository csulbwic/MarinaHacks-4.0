type ProfileProps = {
  name: string
  role: string
  img: string
}

export const Profile = ({ name, role, img }: ProfileProps) => {
  return (
    <div className="flex flex-row items-center">
      <img src={img} alt={name} className="w-40 h-40 rounded-full bg-slate-700/30" />
      <div className="flex-1 flow-col justify-center items-center pl-4">
        <h1 className="text-white text-2xl font-bold">{name}</h1>
        <p className="text-white text-xl">{role}</p>
      </div>
    </div>
  )
}
