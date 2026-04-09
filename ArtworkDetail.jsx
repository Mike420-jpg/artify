import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArtworkById } from "./data/artworksData";
import "./ArtworkDetail.css";
import Footer from "./Footer";

function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundArtwork = getArtworkById(id);

    if (foundArtwork) {
      setArtwork(foundArtwork);
      setLoading(false);
    } else {
      navigate("/categories");
    }
  }, [id, navigate]);

  const handleAddToCartClick = () => {
    alert("Cart functionality coming soon! This is a preview.");
  };

  if (loading) {
    return (
      <div className="artwork-loading">
        <div className="loading-spinner"></div>
        <p>Loading artwork...</p>
      </div>
    );
  }

  return (
    <div className="artwork-detail-page">
      <div className="artwork-detail-content">
        <div className="artwork-image-section">
          <img src={artwork.image} alt={artwork.title} />
        </div>

        <div className="artwork-info-section">
          <h1 className="artwork-category-title">{artwork.category}</h1>

          <h2 className="artwork-subtitle">{artwork.title}</h2>

          <div className="artwork-meta">
            <span className="artwork-code">{artwork.code}</span>
            <span className="artwork-price-display">
              ₱{artwork.price.toLocaleString()}
            </span>
          </div>

          <p className="artwork-description">{artwork.description}</p>

          <button className="add-to-cart-button" onClick={handleAddToCartClick}>
            Add to Cart — ₱{artwork.price.toLocaleString()}
          </button>

          <div className="contact-info">
            <h3>CONTACT INFORMATION</h3>
            <p>
              <strong>Tel:</strong> +44 (0)20 1234 5678
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
            <p>
              <strong>Website:</strong> www.example.com
            </p>
          </div>

          <button
            className="back-button"
            onClick={() => navigate("/categories")}
          >
            ← Back to Gallery
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ArtworkDetail;
