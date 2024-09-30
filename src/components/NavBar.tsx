import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/nav.module.css';
import { useState } from 'react';
import React from 'react';

/* Component for nav responsive*/
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

export const NavBar = ({ showOverlay, setShowOverlay }: any) => {
  
  const [toggleMenu, setToggleMenu] = React.useState(false);

  
  
  return (
    <div className="navbar-container space-x-8">

      {/* Navigation Bar */}
      <nav className={`${styles.nav} bg-mhsky font-bold text-fontDarkBlue shadow-lg`}>
        <div className={`${styles.containerNav} navbar flex justify-between items-center`}>
          
          
          <ul className=".navbar-links flex items-center justify-between space-x-6">
           <li className={` ${styles.ulist} rounded`}><Link href="/portal">Portal</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#info">Info</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#application">Application</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#team">Teams</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#pillars">Pillars</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#faq">FAQ</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div className={`${styles.navbarSmallscreen}`}>
          <IoMenu color ="000" fontSize={27} cursor={'pointer'} onClick={() => setToggleMenu(true)}></IoMenu>
          {toggleMenu &&(
            <div className={`${styles.navbarSmallscreenOverlay}`}>
            <BiMenuAltRight color ="000" fontSize={30} className={`${styles.navbarSmallscreenOverlayOverlayClose}`} onClick={() => setToggleMenu(false)}></BiMenuAltRight>
            <ul className={`${styles.navbarSmallscreenLinks}`}>
              <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/portal">Portal</Link></li>
              <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#info">Info</Link></li>
              <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#application">Application</Link></li>
              <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#team">Teams</Link></li>
              <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#pillars">Pillars</Link></li>
              <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#faq">FAQ</Link></li>
              <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          )}
        </div>

      </nav>
    </div>
  );
}
