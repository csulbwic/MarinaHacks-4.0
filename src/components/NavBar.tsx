import Image from 'next/image';
import Link from 'next/link';
import { FaYinYang } from 'react-icons/fa';
import styles from '@/styles/nav.module.css';
import { useState } from 'react';
import LandingLogo from '../../public/images/MarinaHacks_3.5_Landing_Logo.png'

export const NavBar = ({ showOverlay, setShowOverlay }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className={`${styles.nav} bg-mhsky font-bold text-fontDarkBlue text-3xl`}>
      <div className={`${styles.logo}  ${menuOpen ? `${styles.logoNone}` : ""} flex-1`}>
        <Link className={`btn btn-ghost normal-case text-xl `} href="/#home">
          <Image
            src={LandingLogo}
            alt="MarinaHacks 3.5 Logo"
            className='w-52'
          />
        </Link>
        {showOverlay}
        {/* {!showOverlay && (
          <button className='btn btn-ghost' onClick={setShowOverlay}>
            <FaYinYang className="text-2xl" />
          </button>
        )} */}
      </div> 
      <div className={`${styles.containerNav} flex-none`}>

        <div className={` ${styles.menuBtn}`} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="../images/menu_logo.png" width={30} height={30} alt="" /> 
        </div>
        
        <ul className={` ${styles.menuNav} ${menuOpen ? `${styles.menuNavopen} ${styles.navopen} ${styles.logoNone}` : ""} menu menu-horizontal px-1`}>
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#info">About</Link></li>
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#application">Application</Link></li>
        
  
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#team">Teams</Link></li>
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#faq">FAQs</Link></li>
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#contact">Contact</Link></li>

          <li className={`${styles.ulist}`}  tabIndex={0} >

            <Link href="">
              Info
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className={` ${styles.sublist} p-2 bg-mhsky `}>
              <li className={` ${styles.ulist} hover:bg-mhpurple-200`}><Link href="/#pillars">Pillars</Link></li>
              <li className={` ${styles.ulist} hover:bg-mhpurple-200`}><Link href="/#prizes">Prizes</Link></li>
              <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#sponsors">Sponsors</Link></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  )
}