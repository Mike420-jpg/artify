import React from "react";
import Image1 from './Images/DISCOVER.png';
import Image2 from './Images/PURCHASE.png';
import Image3 from './Images/DELIVER.png';
import line from './Decorative Vector Lines/Line7.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ArtifyWorks.css';

const ArtifyWorks = () => {
    return (
        <div className="artifyWorksContainer">
  <div className="container1 text-center">
    <h1 className="WebTitle">HOW ARTIFY WORKS</h1>
    <p id="ShortDesc">FIND THE PERFECT ARTWORK FOR YOUR SPACE IN JUST THREE EASY STEPS</p>

    <img
      src={line}
      className="DecorativeLine1"
      alt="DecorativeLine"
    />

    <div className="row align-items-start">
      <div className="col">
        <img
          src={Image1}
          alt="Discover"
          className="ArtifyWorks"
        />
        <p className="Subtitle">DISCOVER ORIGINAL ART</p>
        <p className="captions">
          Browse and choose from a curated collection of unique art pieces.
        </p>
      </div>

      <div className="col">
        <img
          src={Image2}
          alt="Purchase"
          className="ArtifyWorks"
        />
        <p className="Subtitle">PURCHASE SECURELY</p>
        <p className="captions">
          Buy your favorite art with our secure and easy payment process
        </p>
      </div>

      <div className="col">
        <img
          src={Image3}
          alt="Deliver"
          className="ArtifyWorks"
        />
        <p className="Subtitle">DELIVERED TO YOUR DOOR</p>
        <p className="captions">
          Get your art delivered safely and ready to hang inside your home
        </p>
      </div>
    </div>
  </div>
</div>
    );
};

export default ArtifyWorks;