import Image from 'next/image';
import Link from 'next/link';
import { FaYinYang } from 'react-icons/fa';
import styles from '@/styles/nav.module.css';
import { useState } from 'react';

export const NavBar = ({ showOverlay, setShowOverlay }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className={`${styles.nav} bg-mhsky font-bold text-fontDarkBlue text-3xl`}>
      <div className={`${styles.logo}  ${menuOpen ? `${styles.logoNone}` : ""} flex-1`}>
        <Link className={`btn btn-ghost normal-case text-xl `} href="/#home">
          <Image
            src={"/images/MarinaHacks_3.5_Landing_Logo.png"}
            alt="MarinaHacks 3.5 Logo"
            width={"3000"}
            height="3000"
            className='w-full h-full object-contain'
          />
        </Link>
        {showOverlay}
        {/* {!showOverlay && (
          <button className='btn btn-ghost' onClick={setShowOverlay}>
            <FaYinYang className="text-2xl" />
          </button>
        )} */}
      </div> 
      <div className={`${styles.containerNav}`}>

        <div className={` ${styles.menuBtn}`} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="../images/menu_logo.png" width={30} height={30} alt="" /> 
        </div>
        
        <ul className={` ${styles.menuNav} ${menuOpen ? `${styles.menuNavopen} ${styles.navopen} ${styles.logoNone}` : ""} menu menu-horizontal px-1`}>
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#info">about</Link></li>
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#application">application</Link></li>
        
  
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#team">team</Link></li>
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#faq">faq</Link></li>
          <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#contact">contact</Link></li>

          <li className={`${styles.ulist}`}  tabIndex={0} >

            <Link href="">
              info
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className={` ${styles.sublist} p-2 bg-mhsky `}>
              <li className={` ${styles.ulist} hover:bg-mhpurple-200`}><Link href="/#pillars">pillars</Link></li>
              <li className={` ${styles.ulist} hover:bg-mhpurple-200`}><Link href="/#prizes">prizes</Link></li>
              <li className={` ${styles.ulist} rounded hover:bg-mhpurple-200`}><Link href="/#sponsors">sponsors</Link></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  )
}