import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormCard.css";
import logo from "./Images/Artify_Logo.png";
import AdminLayout from "./ui-admin/src/App.jsx";

import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

function LoginForm({ onSwitchToRegister }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        setError("User data not found.");
        setLoading(false);
        return;
      }

      const userData = userSnap.data();
      localStorage.setItem("userEmail", userData.email || user.email);
      localStorage.setItem("userRole", userData.role || "User");
      localStorage.setItem("userUID", user.uid);

      setSuccess("Login successful! Redirecting... 🎉");
      setTimeout(() => {
  switch (userData.role) {
    case "Super Admin":
      navigate("/super-dashboard");
      break;

    case "Admin":
      navigate("/admin-dashboard");
      break;

    case "Staff":
      navigate("/staff-dashboard");
      break;

    default:
      navigate("/");
      break;
  }
}, 1000);
    } catch (err) {
      console.error("Login Error:", err);

      switch (err.code) {
        case "auth/user-not-found":
          setError("No account found with that email.");
          break;

        case "auth/wrong-password":
          setError("Incorrect password.");
          break;

        case "auth/invalid-email":
          setError("Invalid email format.");
          break;

        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;

        case "auth/too-many-requests":
          setError("Too many login attempts. Please try again later.");
          break;

        default:
          setError("Something went wrong. Please try again.");
          break;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <div className="card-logo">
        <img src={logo} alt="Artify Logo" className="logo-img" />
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
          autoComplete="email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button
          type="submit"
          className="register-btn"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="login-link">
        Don&apos;t have an account?{" "}
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