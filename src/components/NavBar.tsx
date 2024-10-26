import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/nav.module.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import UserPanel from './UserPanel';

/* Component for nav responsive */
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

export const NavBar = ({ showOverlay, setShowOverlay }: any) => {

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [user, setUser] = React.useState<any>(null); // State for storing user info

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={` ${styles.NavbarContainerOutside} ${styles.sticky} navbar-container space-x-8`}>

      <Image
        src="/images/logos_4.0/short_logo_4.0.png"
        alt='MarinaHacks 4.0 Logo'
        width={150}
        height={150}
      />

      {/* Navigation Bar */}
      <nav className={`${styles.nav} bg-mhsky font-bold text-fontDarkBlue shadow-lg`}>
        <div className={`${styles.containerNav} navbar flex justify-between items-center`}>
          
          
          <ul className=".navbar-links flex items-center justify-between space-x-6">
           <li className={` ${styles.ulist} rounded`}><Link href="/portallogin">Portal</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#info">Info</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#application">Application</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#team">Teams</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#pillars">Pillars</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#prizes">Prizes</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#ideagen">Project Idea Generator</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#faq">FAQ</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Small screen view with Hamburger Menu */}
        <div className={`${styles.navbarSmallscreen}`}>
          <IoMenu color ="000" fontSize={27} cursor={'pointer'} onClick={() => setToggleMenu(true)}></IoMenu>

          {toggleMenu &&(
            <div className={`${styles.navbarSmallscreenOverlay}`}>
            <BiMenuAltRight color ="000" fontSize={30} className={`${styles.navbarSmallscreenOverlayOverlayClose}`} onClick={() => setToggleMenu(false)}></BiMenuAltRight>
            <ul className={`${styles.navbarSmallscreenLinks}`}>
                <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/portallogin">Portal</Link></li>
                <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#info">Info</Link></li>
                <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#application">Application</Link></li>
                <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#team">Teams</Link></li>
                <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#pillars">Pillars</Link></li>
                <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#prizes">Prizes</Link></li>
                <li className={` ${styles.ulist} rounded`}><Link href="/#ideagen">Project Idea Generator</Link></li>
                <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#faq">FAQ</Link></li>
                <li className={` ${styles.navbarSmallscreenLinksUlist} rounded`}><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Side User Panel */}
      {user && (
        <div className={`${styles.userPanelSide}`}>
          <UserPanel user={user} />
        </div>
      )}
    </div>
  );
};
