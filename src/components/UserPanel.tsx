import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import styles from '../styles/userPanel.module.css';

const UserPanel: React.FC<{ user: any }> = ({ user }) => {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push('/portallogin');
      })
      .catch((error) => {
        console.error('Error logging out: ', error);
      });
  };

  return (
    <div className={styles.userPanelContainer}>
      {/* Display Name and Arrow */}
      <div className={styles.userInfo}>
        <p className={styles.displayName}>{user.displayName || 'User'}</p>
        <span className={`${styles.arrowIcon}`}>▼</span>
      </div>

      <div className={styles.profileSphere}>
        <Image
          src={user.photoURL || '/images/profile_pics/blue_shark_hacker.png'}
          alt="Profile"
          className={styles.profilePic}
          width={50}
          height={50}
        />
      </div>

      {/* Dropdown Menu (shown on hover) */}
      <div className={styles.dropdownMenu}>
        <ul className={styles.menuList}>
          <li onClick={() => router.push('/edit-profile')} className={styles.menuItem}>
            Edit Profile
          </li>
          <li onClick={handleLogout} className={styles.menuItem}>
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserPanel;