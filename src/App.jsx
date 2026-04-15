import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Options from "./Options";
import CardSlider1 from "./CardSlider1";
import CardSlider2 from "./CardSlider2";
import Categories from "./Categories";
import ArtworkDetail from "./ArtworkDetail";
import ArtifyWorks from "./ArtifyWorks";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

import UiAdmin from "./ui-admin.jsx";
import SuperAdminLayout from "./SuperDashboard.jsx";
import StaffLayout from "./StaffDashboard.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Options />
      <CardSlider1 />
      <CardSlider2 />
      <ArtifyWorks />
      <Footer />
    </>
  );
}

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="app">
      <div className="main-container">
        <div className="left-section"></div>
        <div className="right-section">
          <div className="form-cards-wrapper">
            {!isLogin ? (
              <RegisterForm onSwitchToLogin={() => setIsLogin(true)} />
            ) : (
              <LoginForm onSwitchToRegister={() => setIsLogin(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminRoute({ children }) {
  const role = localStorage.getItem("userRole");
  return role === "Admin" ? children : <Navigate to="/" />;
}

function SuperAdminRoute({ children }) {
  const role = localStorage.getItem("userRole");
  return role === "Super Admin" ? children : <Navigate to="/" />;
}

function StaffRoute({ children }) {
  const role = localStorage.getItem("userRole");
  return role === "Staff" ? children : <Navigate to="/" />;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docSnap = await getDoc(doc(db, "users", currentUser.uid));
        if (docSnap.exists()) {
          const userData = docSnap.data();
          localStorage.setItem("userRole", userData.role);
        }
      } else {
        localStorage.removeItem("userRole");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<><Navbar /><Categories /></>} />
        <Route path="/aboutus" element={<><Navbar /><AboutUs /></>} />
        <Route path="/LoginRegister" element={<Login />} />
        <Route path="/artwork/:id" element={<><Navbar /><ArtworkDetail /></>} />

        <Route
          path="/admin-dashboard/*"
          element={
            <AdminRoute>
              <UiAdmin /> 
            </AdminRoute>
          }
        />
        <Route
          path="/super-dashboard/*"
          element={
            <SuperAdminRoute>
              <SuperAdminLayout />
            </SuperAdminRoute>
          }
        />
        <Route
          path="/staff-dashboard/*"
          element={
            <StaffRoute>
              <StaffLayout />
            </StaffRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;