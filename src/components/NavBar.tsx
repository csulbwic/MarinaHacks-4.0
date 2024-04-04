
import style from '../styles/nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaYinYang } from 'react-icons/fa'
// import '../styles/nav.module.css'

import { useState } from 'react'


export const NavBar = ({ showOverlay, setShowOverlay }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <div className={`navbar ${style.nav}  bg-mhsky font-bold text-fontDarkBlue text-3xl`}>
      {/* <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl " href="/#home">
          <Image
            // src={"/images/logo_long.png"}
            src={"/images/logo_marinahack.png"}
            alt='logo'
            width="250"
            height="115"
            className='w-full h-full object-contain'
          />
        </Link> 
        {!showOverlay && (
          <button className='btn btn-ghost' onClick={setShowOverlay}>
            <FaYinYang className="text-2xl" />
          </button>
        )}
      </div> */}

      <div className={`${style.containerNav} flex-none`}>
        <div className={` ${style.menuBtn}`} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="../images/menu_logo.png" width={50} height={50} alt="" /> 
        </div>
        
        <ul className={`${style.menuNav} ${menuOpen ? `${style.menuNavopen} ${style.navopen}` : ""} menu menu-horizontal px-1`}>
          <li className={`${style.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#team">home</Link></li>
          <li className={`${style.ulist}`} tabIndex={0} >
            {/* //About : pillar, team,sponsors */}
            <Link href="">
              about
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>

            <ul className={`${style.sublist} p-2 bg-mhsky `}>
              <li className={`${style.ulist}   hover:bg-mhpurple-200`}><Link href="/#pillars">pillars</Link></li>

              {/* //TODO: update link: application, prize, team */}
              <li className={` ${style.ulist}  hover:bg-mhpurple-200`}><Link href="/#team">Team</Link></li>
              <li className={` ${style.ulist}  rounded hover:bg-mhpurple-200`}><Link href="/#sponsors">sponsors</Link></li>
            </ul>
          </li>
          <li className={` ${style.ulist}  rounded hover:bg-mhpurple-200`}><Link href="/#">application</Link></li>
          
          <li className={`${style.ulist}  rounded hover:bg-mhpurple-200`}><Link href="/#faq">faq</Link></li>
          <li className={` ${style.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#">prize</Link></li>
          <li className={`${style.ulist}  rounded hover:bg-mhpurple-200`}><Link href="/#contact">contact</Link></li>
        </ul>
      </div>
    </div>
  )
}