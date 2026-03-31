import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './AboutUs.css';
import wallpaper from './Images/About_Us.png';
import line from './Decorative Vector Lines/Line5.png';
import member1 from './Images/aelous_marbella.jpg';
import member2 from './Images/orland_demillo.png';
import member3 from './Images/carlo_marrero.jpg';
import member4 from './Images/michael_narvarte.png';
import member5 from './Images/mariane_reyes.jfif';
import member6 from './Images/lance_tanala.jfif';
import Footer from './Footer.js';

const AboutUs = () => {
    return (
        <div className="aboutUs container-fluid" id="aboutUsSection">
  <div className="aboutHeroSection">
    <img src={wallpaper} alt="About Artify" className="aboutHeroImage"/>
    <div className="aboutContentOverlay">
      <h1 className="aboutHeroTitle">About Artify!</h1>
      <div className="aboutTextBox">
        <p className="aboutDescriptionText">
          Artify, the place for all sorts of artists. Every masterpiece has their own story to tell and possess deep meaning behind it that should be known, appreciated and leave a memory for eternity. With our platform, artists would be able to showcase and sell their own creations, and build meaningful connection with their fellow artists, collectors and people around the world.
        </p>
      </div>
    </div>
  </div>


  <div className="missionVisionContainer">
    <div className="container">
      <img src={line} alt="DecorativeLine" className="DecorativeLine"/>
      <div class="aboutUsTop text-center">
        <h2 className="aboutUsTitle">About Us</h2>
        <p className="aboutUsSubtitle">Artify is an innovative platform developed specifically for artists to showcase their passion and creativity. The developers are committed to providing a modern method for art collection, facilitating engagement between artists and buyers. Artify aims to offer artists a medium to showcase, promote, and sell their work through traditional means while fostering a community for art lovers. The platform emphasizes the preservation of artistic integrity and creativity, inspiring the next generation of talent and ensuring that artworks reflect high craftsmanship and meet customer satisfaction.</p>
      </div>
      
      <div className="row">
        <div className="col-lg-6">
          <div className="text-center">
            <img src={line} alt="DecorativeLine" className="DecorativeLine"/>
          </div>
          <h3 className="missionVisionTitle">Mission</h3>
          <p className="missionVisionText">Artify envisions becoming the leading digital platform that connect artists and art enthusiasts around the world. We strive to create a global community that celebrates creativity, authenticity, and innovation. By bridging traditional artistry with modern teechnology, Artify aims to inspire appreciation for genuine craftmanship while empowering artists to share their stories and talents with a wider audience.</p>
        </div>
        <div className="col-lg-6">
          <div className="text-center">
            <img src={line} alt="DecorativeLine" className="DecorativeLine"/>
          </div>
          <h3 className="missionVisionTitle">Vision</h3>
          <p class="missionVisionText">Artify is dedicated to fostering a vibrant and inclusive art community where creativity and self-expression can thrive. Our mission is to provide artists with a trusted platform to showcase, promote and sell their artworks while ensuring that customers experience authentic, high-quality pieces. We are committed to preserving the integrity of art and supporting emerging talents by giving them the recognition they deserve.</p>
        </div>
      </div>
    </div>
  </div>


  <div class="teamSection">
          <div className="text-center">
            <img src={line} className="DecorativeLine"/>
          </div>
    <h2 className="teamTitle">Meet the Artify Team</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 teamMemberCol">
          <img src={member1} alt="Team Member 1" className="teamMemberPhoto"/>
          <p className="teamMemberName">Marbella, Aelous Mathew</p>
        </div>
        <div class="col-lg-4 teamMemberCol">
          <img src={member2} alt="Team Member 2" className="teamMemberPhoto"/>
          <p className="teamMemberName">Demillo, Orland Gabriel</p>
        </div>
        <div class="col-lg-4 teamMemberCol">
          <img src={member3} alt="Team Member 3" className="teamMemberPhoto"/>
          <p className="teamMemberName">Marrero, John Carlo</p>
        </div>
        <div class="col-lg-4 teamMemberCol">
          <img src={member4} alt="Team Member 4" className="teamMemberPhoto"/>
          <p className="teamMemberName">Narvarte, Michael Ray</p>
        </div>
        <div class="col-lg-4 teamMemberCol">
          <img src={member5} alt="Team Member 5" className="teamMemberPhoto"/>
          <p class="teamMemberName">Reyes, Mariane</p>
        </div>
        <div class="col-lg-4 teamMemberCol">
          <img src={member6} alt="Team Member 6" className="teamMemberPhoto"/>
          <p className="teamMemberName">Tañala, Lance Christian</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</div>
    );
};

export default AboutUs;