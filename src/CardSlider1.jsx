import React, { useEffect, useRef, useState } from "react";
import "./CardSlider1.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

import like from './Images/heart.png';
import cart from './Images/bag.png';
import line from './Decorative Vector Lines/Line5.png';

const CardSlider2 = () => {

  const sliderRef = useRef(null);
  const [artworks, setArtworks] = useState([]);

  /* ✅ FIREBASE DOCUMENT IDS */
  const featuredIDs = [
    "ceramic_handbuilt_1",
    "portrait_charcoal_2",
    "painting_acrylic_1",
    "painting_oil_1",
    "painting_gouache_1",
    "painting_watercolor_1",
    "portrait_pastel_1",
  ];

  /* 🔥 FETCH DATA FROM FIRESTORE */
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const results = await Promise.all(
          featuredIDs.map(async (id) => {
            const ref = doc(db, "artworks", id);
            const snap = await getDoc(ref);

            if (snap.exists()) {
              return { id: snap.id, ...snap.data() };
            }
            return null;
          })
        );

        setArtworks(results.filter(Boolean));
      } catch (err) {
        console.error("Error fetching artworks:", err);
      }
    };

    fetchArtworks();
  }, []);

  /* 🔥 SLIDER LOGIC (UNCHANGED) */
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

    const touchStart = (e) => {
      startX = e.touches[0].clientX;
      currentX = startX;
      isDragging = true;
      cardContainer.style.transition = "none";
    };

    const touchMove = (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const diffX = startX - currentX;

      cardContainer.style.transform = `translateX(${
        -(currentBatch * cardsPerBatch * cardWidthWithGap) + 20 + diffX
      }px)`;
    };

    const touchEnd = () => {
      if (!isDragging) return;

      isDragging = false;
      const diffX = startX - currentX;
      const threshold = 50;

      if (diffX > threshold && currentBatch < totalBatches - 1) currentBatch++;
      else if (diffX < -threshold && currentBatch > 0) currentBatch--;

      updateSlider();
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;

      currentX = e.clientX;
      const diffX = startX - currentX;

      cardContainer.style.transform = `translateX(${
        -(currentBatch * cardsPerBatch * cardWidthWithGap) + 20 + diffX
      }px)`;
    };

    const onMouseEnd = () => {
      if (!isDragging) return;

      isDragging = false;
      const diffX = startX - currentX;
      const threshold = 50;

      if (diffX > threshold && currentBatch < totalBatches - 1) currentBatch++;
      else if (diffX < -threshold && currentBatch > 0) currentBatch--;

      updateSlider();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseEnd);
    };

    const mouseStart = (e) => {
      startX = e.clientX;
      currentX = startX;
      isDragging = true;
      cardContainer.style.transition = "none";

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseEnd);
    };

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
      <img src={line} alt="DecorativeLine" className="DecorativeLine" />

      <h1 className="WebTitle">POPULAR ARTWORKS</h1>
      <p id="ShortDesc">Browse our most loved pieces</p>

      <div className="SliderContainer">
        <div className="CardSlider" ref={sliderRef}>
          <button className="prev">&#10094;</button>

          <div className="slider-window">
            <div className="cardContainer">

              {artworks.map((art, index) => (
                <div
                  className="card"
                  key={art.id}
                  data-batch={index < 3 ? "1" : "2"}
                >
                  <div className="cardImg">
                    <img src={art.image} alt={art.title} />
                  </div>

                  <div className="card-body">
                    {/* ✅ AUTO-RESIZING PRICE */}
                    <p className="art-price">
                      ₱{art.price?.toLocaleString()}
                    </p>

                    <h5 className="card-title">{art.title}</h5>
                    <p className="card-text">
                      {art.artist}, {art.country}
                    </p>

                    <div className="icon-container">
                      <img src={like} alt="Like" className="icons" />
                      <img src={cart} alt="Cart" className="icons" />
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <button className="next">&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider2;