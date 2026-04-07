import React, { useState } from 'react';
import './FormCard.css';
import logo from './Images/Artify_Logo.png';

function LoginForm({ onSwitchToRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      setTimeout(() => setError(''), 4000)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      setTimeout(() => setError(''), 4000)
      return
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []

    // Find user with matching email and password
    const user = users.find((u) => u.email === email && u.password === password)

    if (!user) {
      setError('Invalid email or password')
      setTimeout(() => setError(''), 4000)
      return
    }

    setSuccess('Login successful! Redirecting...')
    setEmail('')
    setPassword('')

    setTimeout(() => {
      window.location.href = '#dashboard'
    }, 2000)
  }

  const handleForgotPassword = (e) => {
    e.preventDefault()
    setError('Password reset functionality coming soon!')
    setTimeout(() => setError(''), 4000)
  }

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
          <a href="#" className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="register-btn">
          Sign In
        </button>
      </form>

      <div className="login-link">
        Don't have an account?{' '}
        <a
          href="#"
          className="register-here"
          onClick={(e) => {
            e.preventDefault()
            onSwitchToRegister()
          }}
        >
          Register here
        </a>
      </div>
    </div>
  )
}

export default LoginForm
