import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../../firebase';
import styles from '../styles/editProfile.module.css';

const EditProfile: React.FC = () => {
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [newDisplayName, setNewDisplayName] = useState('');
  const [profilePicUrl, setProfilePicUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [avatarSelection, setAvatarSelection] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName || 'User');
        setProfilePicUrl(user.photoURL || '/images/profile_pics/blue_shark_hacker.png');
        setLoading(false);
      } else {
        router.push('/portallogin');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push('/portallogin');
      })
      .catch((error) => {
        console.error('Error logging out: ', error);
      });
  };

  const handleUpdateProfile = () => {
    const user = auth.currentUser;
    if (user) {
      updateProfile(user, {
        displayName: newDisplayName || displayName,
        photoURL: profilePicUrl,
      })
        .then(() => {
          alert('Profile updated successfully!');
          setDisplayName(newDisplayName || displayName);
        })
        .catch((error) => {
          console.error('Error updating profile: ', error);
        });
    }
  };

  const handleAvatarClick = (avatarUrl: string) => {
    setProfilePicUrl(avatarUrl);
    setAvatarSelection(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.headerText}>Edit Profile</h1>
        <label className={styles.label}>Hi {displayName}!</label>
        <div className={styles.imgContainer}>
          <img src={profilePicUrl} alt="Profile Pic" />
        </div>

        <button
          onClick={() => setAvatarSelection(!avatarSelection)}
          className={styles.uploadButton}
        >
          Choose Avatar
          <span className={styles.arrow}>{avatarSelection ? '▲' : '▼'}</span>
        </button>

        {avatarSelection && (
          <div className={styles.avatarSelection}>
            <img
              src="/images/profile_pics/blue_shark_hacker.png"
              alt="Avatar 1"
              onClick={() => handleAvatarClick('/images/profile_pics/blue_shark_hacker.png')}
            />
            <img
              src="/images/profile_pics/pink_shark_hacker.png"
              alt="Avatar 2"
              onClick={() => handleAvatarClick('/images/profile_pics/pink_shark_hacker.png')}
            />
            <img
              src="/images/profile_pics/green_shark_hacker.png"
              alt="Avatar 3"
              onClick={() => handleAvatarClick('/images/profile_pics/green_shark_hacker.png')}
            />
            <img
              src="/images/profile_pics/purple_shark_hacker.png"
              alt="Avatar 4"
              onClick={() => handleAvatarClick('/images/profile_pics/purple_shark_hacker.png')}
            />
            <img
              src="/images/profile_pics/imposter_shark_hacker.png"
              alt="Avatar 5"
              onClick={() => handleAvatarClick('/images/profile_pics/imposter_shark_hacker.png')}
            />
          </div>
        )}

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="New Display Name"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
            className={styles.input}
          />
        </div>

        <button onClick={handleUpdateProfile} className={styles.smallerButton}>
          Update Profile/Save Changes
        </button>

        <button onClick={() => router.push('/change-password')} className={styles.smallerButton}>
          Change Password
        </button>

        <button onClick={handleLogout} className={styles.button}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
