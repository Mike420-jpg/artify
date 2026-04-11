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
import SuperDashboard from "./super-admin/src/SuperDashboard";
import AdminDashboard from "./ui-admin/src/Dashboard";

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
function Dashboard({ user }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Welcome</h2>
      <p>You are logged in as: {user.email}</p>
    </div>
  );
}
function AdminRoute({ children }) {
  const role = localStorage.getItem("userRole");
  return role === "Admin" ? children : <Navigate to="/" />;
}

function SuperAdminRoute({ children }) {
  const role = localStorage.getItem("userRole");
  return role === "Super admin" ? children : <Navigate to="/" />;
}

function UserRoute({ user, children }) {
  return user ? children : <Navigate to="/LoginRegister" />;
}

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const docSnap = await getDoc(doc(db, "users", currentUser.uid));

          if (docSnap.exists()) {
            const userData = docSnap.data();
            setRole(userData.role);
            localStorage.setItem("userRole", userData.role);
          }
        } catch (error) {
          console.error("Error fetching role:", error);
        }
      } else {
        setRole(null);
        localStorage.removeItem("userRole");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/LoginRegister" element={<Login />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
        <Route
          path="/dashboard"
          element={
            <UserRoute user={user}>
              <Dashboard user={user} />
            </UserRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/super-dashboard"
          element={
            <SuperAdminRoute>
              <SuperDashboard />
            </SuperAdminRoute>
          }
        />
        <Route
          path="/redirect"
          element={
            user ? (
              role === "Super admin" ? (
                <Navigate to="/super-dashboard" />
              ) : role === "Admin" ? (
                <Navigate to="/admin-dashboard" />
              ) : (
                <Navigate to="/dashboard" />
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