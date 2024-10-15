import React, { useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  sendEmailVerification 
} from "firebase/auth";
import styles from "../styles/signup.module.css";
import { auth } from '../../firebase';
import { FaEye, FaEyeSlash, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to handle user sign-up with email/password
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset any previous success message
    setSuccess(null);

    // Check if email ends with 'csulb.edu'
    if (!email.endsWith('csulb.edu')) {
      setError("Only csulb email addresses are allowed.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // After the user is created, update the display name
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: displayName,
        });

        // Send email verification
        await sendEmailVerification(userCredential.user);

        // Set success message and clear any errors
        setSuccess('User created successfully! Please check your email to verify your account.');
        setError(null);
      }

    } catch (error: any) {
      setError(error.message); // Display error
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="/images/logos_4.0/5.png" alt="Description of the image" />
      </div>
      <img src="/images/logos_4.0/MarinaHacks_4.0_Logo.png" alt="Shark Image" className={styles.sharkImage} />

      {error && (
        <div className={styles.error}>
          <FaExclamationCircle className={styles.errorIcon} />
          {error}
        </div>
      )}

      {success && (
        <div className={styles.success}>
          <FaCheckCircle className={styles.successIcon} />
          {success}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSignUp}>
        <h1 className={styles.heading}>Create an Account</h1>
        <h2 className={styles.heading2}>Display Name</h2>
        <input 
          className={styles.inputGroup}
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <h2 className={styles.heading2}>Set Email</h2>
        <input 
          className={styles.inputGroup}
          type="email" 
          placeholder="Email (must end with csulb.edu)" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <h2 className={styles.heading2}>Set Password</h2>
        <div className={styles.inputGroupWithIcon}>
          <input 
            className={styles.inputGroup}
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span className={styles.icon} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <h2 className={styles.heading2}>Confirm Password</h2>
        <div className={styles.inputGroupWithIcon}>
          <input 
            className={styles.inputGroup}
            type={showConfirmPassword ? "text" : "password"} 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          <span className={styles.icon} onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button className={styles.submitButton} type="submit">Sign Up</button>
        
        <h2 className={styles.loginLink}><a href="/portallogin">Already have an account? Log in.</a></h2>
      </form>
    </div>
  );
};

export default Signup;
