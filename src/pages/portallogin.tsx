import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/portal.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Portal: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Handle form submit and login with email/password
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoggingIn(true);

    // Check if email ends with 'csulb.edu'
    if (!email.endsWith("csulb.edu")) {
      setError("Only csulb email addresses are allowed.");
      setIsLoggingIn(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Check if the email is verified
      if (user.emailVerified) {
        console.log("Logged in:", user);
        // window.location.href = '/edit-profile'; // Redirect to edit-profile if email is verifie
        window.location.href = "/portal";
      } else {
        // If the email is not verified, show an error message
        setError("Please verify your email before logging in.");
        setIsLoggingIn(false); // Reset loading state
      }
    } catch (error: any) {
      const errorMessage =
        "Wrong username/password. Please double check your credentials.";
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
      <img
        src="/images/logos_4.0/MarinaHacks_4.0_Logo.png"
        alt="Shark Image"
        className={styles.sharkImage}
      />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.headerText}>Sign in</h1>
        {error && <div className={styles.error}>{error}</div>}{" "}
        {/* Updated Error Message */}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            placeholder="Email (must end with csulb.edu)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            password
          </label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
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
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className={styles.button}
          disabled={isLoggingIn} // Disable button when logging in
        >
          {isLoggingIn ? "Logging you in..." : "Sign in"}
        </button>
        {/* Forgot Password and Sign Up Section */}
        <div className={styles.forgotSignUp}>
          <Link href="/forgotpassword" className={styles.forgotPasswordLink}>
            Forgot password
          </Link>
          <Link href="/signup" className={styles.signUpLink}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Portal;
