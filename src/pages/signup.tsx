import React, { useState } from 'react';
import styles from '../styles/signup.module.css'; // CSS for Sign Up

const Signup: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add logic for sign-up or authentication here
    console.log('Name:', name, 'Email:', email, 'Password:', password);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerText}>Sign Up for MarinaHacks</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input 
            type="text" 
            id="name" 
            className={styles.input} 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
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
          <label htmlFor="password" className={styles.label}>Password</label>
          <div className={styles.passwordWrapper}>
            <input 
              type={showPassword ? 'text' : 'password'}
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
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
          <input 
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword" 
            className={styles.input} 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className={styles.button}>Create Account</button>
      </form>
      <div className={styles.loginRedirect}>
        <p>Already have an account? <a href="/portallogin" className={styles.loginLink}>Log In</a></p>
      </div>
    </div>
  );
};

export default Signup;
