import Image from 'next/image'

export const NavBar = () => {
  return (
    <div className="navbar bg-mhsky">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/home">
          <Image
            src={"/images/logo_long.png"}
            alt='logo'
            width="588"
            height="115"
            className='w-full h-full object-contain'
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a>
              about
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a href="#">pillars</a></li>
              <li><a href="#">post winner</a></li>
            </ul>
          </li>
          <li><a href="/teams">team</a></li>
          <li><a href="#">sponsor</a></li>
          <li><a href="#">faq</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
    </div>
  )
}