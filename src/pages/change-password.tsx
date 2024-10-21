import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, updatePassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { auth } from '../../firebase';
import styles from '../styles/changePassword.module.css';

const ChangePassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);  // State to toggle new password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/portallogin'); // Redirect to login if not authenticated
      } else {
        setLoading(false); // Stop loading once the user is authenticated
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleChangePassword = () => {
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const user = auth.currentUser;
    if (user) {
      updatePassword(user, newPassword)
        .then(() => {
          alert('Password updated successfully!');
          router.push('/edit-profile'); // Redirect back to the edit-profile page
        })
        .catch((error) => {
          console.error('Error updating password: ', error);
          setError('Failed to update password. Please try again.');
        });
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.headerText}>Change Password</h1>

        {/* New Password Field */}
        <div className={styles.passwordWrapper}>
          <input
            type={showNewPassword ? 'text' : 'password'}  // Toggle input type based on visibility
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={styles.input}
          />
          <button
            type="button"
            onClick={toggleNewPasswordVisibility}
            className={styles.showPasswordButton}
          >
            {showNewPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {/* Confirm Password Field */}
        <div className={styles.passwordWrapper}>
          <input
            type={showConfirmPassword ? 'text' : 'password'}  // Toggle input type based on visibility
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className={styles.showPasswordButton}
          >
            {showConfirmPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}
        <button
          onClick={handleChangePassword}
          className={styles.smallerButton}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;