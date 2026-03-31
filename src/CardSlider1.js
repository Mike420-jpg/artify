import React from "react";
import "./CardSlider1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import card1 from './Images/NA1.png';
import card2 from './Images/NA2.png';
import card3 from './Images/NA3.png';
import like from './Images/heart.png';
import cart from './Images/bag.png';
import line from './Decorative Vector Lines/Line5.png';
import { useEffect, useRef } from "react";

const CardSlider1 = () => {

    const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const cardContainer = slider.querySelector(".cardContainer");
    const sliderWindow = slider.querySelector(".slider-window");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    let currentBatch = 0;
    const totalBatches = 2;
    const cardsPerBatch = 3;
    const cardWidthWithGap = 340;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    function updateSlider() {
      const offset = -(currentBatch * cardsPerBatch * cardWidthWithGap) + 20;

      cardContainer.style.transform = `translateX(${offset}px)`;
      cardContainer.style.transition = isDragging
        ? "none"
        : "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";

      prevBtn.disabled = currentBatch === 0;
      nextBtn.disabled = currentBatch === totalBatches - 1;
    }

    // Touch Start
    const touchStart = (e) => {
      startX = e.touches[0].clientX;
      currentX = startX;
      isDragging = true;
      cardContainer.style.transition = "none";
    };

    // Touch Move
    const touchMove = (e) => {
      if (!isDragging) return;

      currentX = e.touches[0].clientX;
      const diffX = startX - currentX;

      cardContainer.style.transform = `translateX(${
        -(currentBatch * cardsPerBatch * cardWidthWithGap) + 20 + diffX
      }px)`;
    };

    // Touch End
    const touchEnd = () => {
      if (!isDragging) return;

      isDragging = false;
      const diffX = startX - currentX;
      const threshold = 50;

      if (diffX > threshold && currentBatch < totalBatches - 1) {
        currentBatch++;
      } else if (diffX < -threshold && currentBatch > 0) {
        currentBatch--;
      }

      updateSlider();
    };

    // Mouse Move
    const onMouseMove = (e) => {
      if (!isDragging) return;

      currentX = e.clientX;
      const diffX = startX - currentX;

      cardContainer.style.transform = `translateX(${
        -(currentBatch * cardsPerBatch * cardWidthWithGap) + 20 + diffX
      }px)`;
    };

    // Mouse End
    const onMouseEnd = () => {
      if (!isDragging) return;

      isDragging = false;
      const diffX = startX - currentX;
      const threshold = 50;

      if (diffX > threshold && currentBatch < totalBatches - 1) {
        currentBatch++;
      } else if (diffX < -threshold && currentBatch > 0) {
        currentBatch--;
      }

      updateSlider();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseEnd);
    };

    // Mouse Start
    const mouseStart = (e) => {
      startX = e.clientX;
      currentX = startX;
      isDragging = true;
      cardContainer.style.transition = "none";

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseEnd);
    };

    // Buttons
    const nextClick = () => {
      if (currentBatch < totalBatches - 1) {
        currentBatch++;
        updateSlider();
      }
    };

    const prevClick = () => {
      if (currentBatch > 0) {
        currentBatch--;
        updateSlider();
      }
    };

    sliderWindow.addEventListener("touchstart", touchStart);
    sliderWindow.addEventListener("touchmove", touchMove);
    sliderWindow.addEventListener("touchend", touchEnd);

    sliderWindow.addEventListener("mousedown", mouseStart);

    nextBtn.addEventListener("click", nextClick);
    prevBtn.addEventListener("click", prevClick);

    setTimeout(updateSlider, 100);

    return () => {
      sliderWindow.removeEventListener("touchstart", touchStart);
      sliderWindow.removeEventListener("touchmove", touchMove);
      sliderWindow.removeEventListener("touchend", touchEnd);

      sliderWindow.removeEventListener("mousedown", mouseStart);

      nextBtn.removeEventListener("click", nextClick);
      prevBtn.removeEventListener("click", prevClick);
    };
  }, []);

    return (
        <div className="NewArrival container-fluid">
            <img src= {line} alt = "DecorativeLine" className="DecorativeLine"></img>
            <h1 className="WebTitle"> NEW ARRIVALS </h1>
            <p id="ShortDesc"> Explore the latest artworks just added </p>

            <div className="SliderContainer">
                <div className="CardSlider" ref={sliderRef}>
                    <button className="prev"> &#10094; </button>

                    <div className="slider-window">
                        <div className="cardContainer">

                            <div className="card" data-batch="1">
                                <div className="cardImg">
                                    <img src={card1} className="card-img-top" alt="Art1"></img>
                                </div>

                                <div className="card-body">
                                    <p className="art-price"> P999 </p>
                                    <h5 className="card-title"> I Want You To Bloom A Flower In Your Fantasy </h5>
                                    <p className="card-text"> Jooha Sim, South Korea </p>
                                    <div className="icon-container">
                                        <img src={like} alt="Like" className="icons"></img>
                                        <img src={cart} alt="Cart" className="icons"></img>
                                    </div>
                                </div>
                            </div>

                            <div className="card" data-batch="1">
                                <div className="cardImg">
                                    <img src={card2} className="card-img-top" alt="Art1"></img>
                                </div>

                                <div className="card-body">
                                    <p className="art-price"> P999 </p>
                                    <h5 className="card-title"> I Want You To Bloom A Flower In Your Fantasy </h5>
                                    <p className="card-text"> Jooha Sim, South Korea </p>
                                    <div className="icon-container">
                                        <img src={like} alt="Like" className="icons"></img>
                                        <img src={cart} alt="Cart" className="icons"></img>
                                    </div>
                                </div>
                            </div>

                            <div className="card" data-batch="1">
                                <div className="cardImg">
                                    <img src={card3} className="card-img-top" alt="Art1"></img>
                                </div>

                                <div className="card-body">
                                    <p className="art-price"> P999 </p>
                                    <h5 className="card-title"> I Want You To Bloom A Flower In Your Fantasy </h5>
                                    <p className="card-text"> Jooha Sim, South Korea </p>
                                    <div className="icon-container">
                                        <img src={like} alt="Like" className="icons"></img>
                                        <img src={cart} alt="Cart" className="icons"></img>
                                    </div>
                                </div>
                            </div>

                            <div className="card" data-batch="2">
                                <div className="cardImg">
                                    <img src={card1} className="card-img-top" alt="Art1"></img>
                                </div>

                                <div className="card-body">
                                    <p className="art-price"> P999 </p>
                                    <h5 className="card-title"> I Want You To Bloom A Flower In Your Fantasy </h5>
                                    <p className="card-text"> Jooha Sim, South Korea </p>
                                    <div className="icon-container">
                                        <img src={like} alt="Like" className="icons"></img>
                                        <img src={cart} alt="Cart" className="icons"></img>
                                    </div>
                                </div>
                            </div>

                            <div className="card" data-batch="2">
                                <div className="cardImg">
                                    <img src={card2} className="card-img-top" alt="Art1"></img>
                                </div>

                                <div className="card-body">
                                    <p className="art-price"> P999 </p>
                                    <h5 className="card-title"> I Want You To Bloom A Flower In Your Fantasy </h5>
                                    <p className="card-text"> Jooha Sim, South Korea </p>
                                    <div className="icon-container">
                                        <img src={like} alt="Like" className="icons"></img>
                                        <img src={cart} alt="Cart" className="icons"></img>
                                    </div>
                                </div>
                            </div>

                            <div className="card" data-batch="2">
                                <div className="cardImg">
                                    <img src={card3} className="card-img-top" alt="Art1"></img>
                                </div>

                                <div className="card-body">
                                    <p className="art-price"> P999 </p>
                                    <h5 className="card-title"> I Want You To Bloom A Flower In Your Fantasy </h5>
                                    <p className="card-text"> Jooha Sim, South Korea </p>
                                    <div className="icon-container">
                                        <img src={like} alt="Like" className="icons"></img>
                                        <img src={cart} alt="Cart" className="icons"></img>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                <button className="next"> &#10095; </button>
                </div>
            </div>
        </div>
    );
};

export default CardSlider1;