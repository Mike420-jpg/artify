import React, { useState } from "react";
import "./FormCard.css";
import logo from "./Images/Artify_Logo.png";

import { 
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

function LoginForm({ onSwitchToRegister }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      return setError("Please enter a valid email");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      await setPersistence(auth, browserLocalPersistence);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const docSnap = await getDoc(doc(db, "users", user.uid));

      if (!docSnap.exists()) {
        setError("User data not found");
        return;
      }

      const userData = docSnap.data();

      localStorage.setItem("userRole", userData.role);
      localStorage.setItem("userEmail", userData.email);

      setSuccess("Login successful!");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        window.location.href = "/"; 
      }, 1500);

    } catch (err) {
      console.error(err);

      if (err.code === "auth/user-not-found") {
        setError("User not found");

      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password");

      } else if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password");

      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="form-card">

      <div className="card-logo">
        <img src={logo} alt="Artify" className="logo-img" />
      </div>

      <h1 className="form-title">SIGN IN</h1>
      <p className="form-subtitle">Please confirm your details</p>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="register-btn">
          Sign In
        </button>
      </form>

      <div className="login-link">
        Don't have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSwitchToRegister();
          }}
        >
          Register here
        </a>
      </div>

    </div>
  );
}

export default LoginForm;