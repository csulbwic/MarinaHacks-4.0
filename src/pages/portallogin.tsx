import React, { useState, useEffect } from 'react';
import styles from '../styles/portal.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import 'firebaseui/dist/firebaseui.css';

const Portal: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamically import FirebaseUI only on the client side
      import('firebaseui').then(firebaseui => {
        const uiConfig = {
          signInOptions: [
            {
              provider: 'google.com', // Google sign-in provider ID
            },
          ],
          signInSuccessUrl: '/dashboard', // Redirect to dashboard after success
          callbacks: {
            signInSuccessWithAuthResult: () => {
              return true; // Automatically redirect to signInSuccessUrl
            },
          },
        };

        // Initialize FirebaseUI widget
        const ui =
          firebaseui.auth.AuthUI.getInstance() ||
          new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', uiConfig);
      });
    }
  }, []);

// Handle form submit and login with email/password
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoggingIn(true);

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if the email is verified
    if (user.emailVerified) {
      console.log('Logged in:', user);
      window.location.href = '/dashboard'; // Redirect to dashboard if email is verified
    } else {
      // If the email is not verified, show an error message
      setError('Please verify your email before logging in.');
      setIsLoggingIn(false); // Reset loading state
    }
  } catch (error: any) {
    const errorMessage = 'Wrong username/password. Please double check your credentials.';
    setError(errorMessage); // Set the error message
    setIsLoggingIn(false); // Reset loading state on error
  }
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="/images/logos_4.0/5.png" alt="Description of the image" />
      </div>
      <img src="/images/logos_4.0/MarinaHacks_4.0_Logo.png" alt="Shark Image" className={styles.sharkImage} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.headerText}>sign in</h1>
        {error && <p className={styles.error}>{error}</p>} {/* Display error message */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>email</label>
          <input 
            type="email" 
            id="email" 
            className={styles.input} 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>password</label>
          <div className={styles.passwordWrapper}>
            <input 
              type={showPassword ? 'text' : 'password'}  // Conditionally change the input type
              id="password" 
              className={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <button
              type="button" 
              onClick={togglePasswordVisibility} 
              className={styles.showPasswordButton}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button 
          type="submit" 
          className={styles.button} 
          disabled={isLoggingIn} // Disable button when logging in
        >
          {isLoggingIn ? 'Logging you in...' : 'sign in'}
        </button>
        
        {/* Forgot Password and Sign Up Section */}
        <div className={styles.forgotSignUp}>
          <a href="/forgot-password" className={styles.forgotPasswordLink}>
            forgot password
          </a>
          <a href="/signup" className={styles.signUpLink}>
            sign up
          </a>
        </div>
      </form>

      {/* FirebaseUI Google Sign-In Button */}
      <div id="firebaseui-auth-container"></div>
    </div>
  );
};

export default Portal;
