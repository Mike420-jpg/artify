import React, { useState } from 'react';
import './FormCard.css';
import logo from './Images/Artify_Logo.png';

function RegisterForm({ onSwitchToLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
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

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setTimeout(() => setError(''), 4000)
      return
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []

    if (users.some((user) => user.email === email)) {
      setError('Email already registered')
      setTimeout(() => setError(''), 4000)
      return
    }

    // Add new user
    users.push({
      id: Date.now(),
      email: email,
      password: password,
      createdAt: new Date().toISOString(),
    })

    localStorage.setItem('users', JSON.stringify(users))

    setSuccess('Account created successfully! Redirecting to login...')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    setTimeout(() => {
      onSwitchToLogin()
    }, 2000)
  }

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
        Already have an account?{' '}
        <a href="#" onClick={(e) => {
          e.preventDefault()
          onSwitchToLogin()
        }}>
          Login here
        </a>
      </div>
    </div>
  )
}

export default RegisterForm
