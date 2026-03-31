import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Options from "./Options";
import CardSlider1 from "./CardSlider1";
import CardSlider2 from "./CardSlider2";
import Categories from "./Categories";
import ArtifyWorks from "./ArtifyWorks";
import Footer from "./Footer.js";
import AboutUs from "./AboutUs.js";

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

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;