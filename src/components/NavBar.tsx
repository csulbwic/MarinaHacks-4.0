import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/nav.module.css';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import UserPanel from './UserPanel';

export const NavBar = () => {
  const [user, setUser] = useState<any>(null); // State for storing user info

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
    <div className="navbar-container flex justify-between items-center space-x-8">
      {/* Navigation Bar */}
      <div className={`${styles.nav} bg-mhsky font-bold text-fontDarkBlue shadow-lg`}>
        <div className={`${styles.containerNav} flex justify-between items-center`}>
          <ul className="flex items-center justify-between space-x-6">
            <li className={` ${styles.ulist} rounded`}><Link href="/portallogin">Portal</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#info">Info</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#application">Application</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#team">Teams</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#pillars">Pillars</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#faq">FAQ</Link></li>
            <li className={` ${styles.ulist} rounded`}><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      {/* User Panel positioned on the right side */}
      {user && (
        <div className="user-panel-container flex items-center justify-end">
          <UserPanel user={user} />
        </div>
      )}
    </div>
  );
};
