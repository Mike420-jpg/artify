import React from "react";
import "./carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from './Images/FirstImage.png';
import image2 from './Images/SecondImage.jpg';
import image3 from './Images/ThirdImage.jpg';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide ms-auto md">

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active">
          <div className="overlay"></div>

          <img
            src={image1}
            className="d-block w-100"
            alt="First Carousel Image"
            id="FirstImage"
          />

          <div className="centeredText">
            Find your Next Masterpiece

            <p id="Follow-Up">
              Explore fresh artworks added every month.
            </p>

            <button className="btn btn-outline-secondary btn-lg">
              Shop Now
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <div className="overlay"></div>

          <img
            src={image2}
            className="d-block w-100"
            alt="Second Carousel Image"
            id="SecondImage"
          />

          <div className="centeredText">
            Discover Other Artists

            <p id="Follow-Up">
              Find out about other artists and learn their Artworks
            </p>

            <button className="btn btn-outline-secondary btn-lg">
              Shop Now
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <div className="overlay"></div>

          <img
            src={image3}
            className="d-block w-100"
            alt="First Carousel Image"
            id="FirstImage"
          />

          <div className="centeredText">
            Your Support Matters

            <p id="Follow-Up">
              Every purchases made by you is well apppreciated by the Artists
            </p>

            <button className="btn btn-outline-secondary btn-lg">
              Shop Now
            </button>
          </div>
        </div>

      </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>

    </div>
  );
};

export default Carousel;