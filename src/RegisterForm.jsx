import { useState } from "react";
import "./FormCard.css";
import logo from "./Images/Artify_Logo.png";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

function RegisterForm({ onSwitchToLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setTimeout(() => setError(""), 4000);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setTimeout(() => setError(""), 4000);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setTimeout(() => setError(""), 4000);
      return;
    }

    try {


      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;


      await setDoc(doc(db, "users", user.uid), {
        email: email,
        createdAt: new Date()
      });

      setSuccess("Account created successfully! Redirecting to login...");

      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        if (onSwitchToLogin) {
          onSwitchToLogin();
        }
      }, 2000);

    } catch (err) {

      if (err.code === "auth/email-already-in-use") {
        setError("Email already registered");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format");
      } else {
        setError(err.message);
      }

      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <div className="form-card">

      <div className="card-logo">
        <img src={logo} alt="Artify" className="logo-img" />
      </div>

      <h1 className="form-title">CREATE YOUR ACCOUNT</h1>
      <p className="form-subtitle">Please confirm your details</p>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form className="register-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>

      </form>

      <div className="login-link">
        Already have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onSwitchToLogin) {
              onSwitchToLogin();
            }
          }}
        >
          Login here
        </a>
      </div>

    </div>
  );
}

export default RegisterForm;