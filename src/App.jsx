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

import SuperAdminLayout from "./super-admin/src/App";
import AdminLayout from "./ui-admin/src/App";
import StaffLayout from "./StaffDashboard/src/App";

function Home() {
  return (
    <>
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
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const docSnap = await getDoc(doc(db, "users", currentUser.uid));
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setRole(userData.role);
          localStorage.setItem("userRole", userData.role);
        }
      } else {
        setRole(null);
        localStorage.removeItem("userRole");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/LoginRegister" element={<Login />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />

        {/* DASHBOARDS */}
        <Route
          path="/SuperAdmin/*"
          element={
            <SuperAdminRoute>
              <SuperAdminLayout />
            </SuperAdminRoute>
          }
        />

        <Route
          path="/admin-dashboard/*"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
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

        {/* ROLE REDIRECT */}
        <Route
          path="/redirect"
          element={
            user ? (
              role === "Super Admin" ? (
                <Navigate to="/SuperAdmin" />
              ) : role === "Admin" ? (
                <Navigate to="/admin-dashboard" />
              ) : role === "Staff" ? (
                <Navigate to="/staff-dashboard" />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/LoginRegister" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;