import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
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
  const [isLogin, setIsLogin] = useState(false)

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
  )
}
function Dashboard({ user }) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Welcome</h2>
      <p>You are logged in as: {user.email}</p>
    </div>
  );
}
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />

      </Routes>

    </Router>
  );
}
export default App;
