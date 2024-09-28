import React, { useState } from 'react';
import styles from '../styles/portal.module.css'; // Import the CSS module

const Portal: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Correctly type the event parameter using React.FormEvent
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic for authentication or validation here
    console.log('Email:', email, 'Password:', password);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerText}>MarinaHacks Portal Login</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <div>
          <a href="/forgot-password" className={styles.forgotPasswordLink}>
            Forgot password?
          </a>
        </div>
        <button type="submit" className={styles.button}>Login</button>
      </form>
      <div className={styles.signUp}>
        <a href="/signup" className={styles.signUpLink}>Don't have an account? Sign up.</a>
      </div>
    </div>
  );
};

export default Portal;
