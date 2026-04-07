import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Options from "./Options";
import CardSlider1 from "./CardSlider1";
import CardSlider2 from "./CardSlider2";
import Categories from "./Categories";
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


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/LoginRegister" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;