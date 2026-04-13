// src/Categories.js
import React, { useState, useEffect } from "react";
import "./Categories.css";
import Navbar from "./Navbar.jsx";
import "./navbar.css";
import Footer from "./Footer.jsx";
import { useNavigate } from "react-router-dom";
// Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function Categories() {
  const navigate = useNavigate();
  // State for selected subcategory
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  // State for collapsed categories
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // State for selected main category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Firebase data
  const [categoriesData, setCategoriesData] = useState([]);
  const [allFeaturedItems, setAllFeaturedItems] = useState([]);

  // Toggle category collapse
  const toggleCategory = (categoryName) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // Handle subcategory click
  const handleSubcategoryClick = (category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategoriesData(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };



  // Fetch artworks
  const fetchArtworks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "artworks"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllFeaturedItems(data);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    }
  };

  // Run on load
  useEffect(() => {
    fetchCategories();
    fetchArtworks();
  }, []);

  // Filter items based on selected subcategory
  const getFilteredItems = () => {
    if (selectedSubcategory === "All") {
      return allFeaturedItems;
    }
    return allFeaturedItems.filter(
      (item) => item.subcategory === selectedSubcategory
    );
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="artify-container">
      

      {/* Main Layout */}
      <div className="main-layout">
        {/* Left Side - Categories Sidebar */}
        <div className="sidebar">
          <div className="sidebar-header">
            <span>Categories</span>
            <span className="collapse-icon">⌃</span>
          </div>

          {/* All Categories Option */}
          <div className="category-group">
            <div
              className={`category-title ${
                selectedSubcategory === "All" ? "active-category" : ""
              }`}
              onClick={() => setSelectedSubcategory("All")}
            >
              <span>All Categories</span>
            </div>
          </div>

          {/* Dynamically render categories */}
          {categoriesData.map((category) => (
            <div key={category.id} className="category-group">
              <div
                className="category-title"
                onClick={() => toggleCategory(category.name)}
              >
                <span>{category.name}</span>
                <span
                  className={`category-arrow ${
                    collapsedCategories[category.name] ? "collapsed" : ""
                  }`}
                >
                  ⌃
                </span>
              </div>

              {/* Show subcategories if not collapsed */}
              {!collapsedCategories[category.name] &&
                category.subcategories?.length > 0 && (
                  <ul>
                    {category.subcategories.map((sub) => (
                      <li
                        key={sub}
                        onClick={() =>
                          handleSubcategoryClick(category.name, sub)
                        }
                        className={
                          selectedSubcategory === sub
                            ? "active-subcategory"
                            : ""
                        }
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}

              {/* If no subcategories */}
              {!collapsedCategories[category.name] &&
                (!category.subcategories ||
                  category.subcategories.length === 0) && (
                  <ul>
                    <li className="no-subcategories">Coming soon</li>
                  </ul>
                )}
            </div>
          ))}
        </div>

        {/* Right Side - Featured Items */}
        <div className="featured-section">
          <h1 className="artify-title">Artify</h1>

          <div className="category-header">
            <h2 className="section-title">
              {selectedSubcategory === "All"
                ? "All Artworks"
                : selectedSubcategory}
            </h2>
            <p className="item-count-display">
              {filteredItems.length} items found
            </p>
          </div>

          {/* Featured Items Grid */}
          <div className="featured-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="featured-card">
                <div className="featured-image">
                  <img src={item.image} alt={item.title} />
                  <div className="price-tag">
                    ₱{item.price?.toLocaleString()}
                  </div>
                </div>
                <div className="featured-details">
                  <h3 className="featured-title">{item.title}</h3>
                  <p className="artist-info">
                    {item.artist}, {item.country}
                  </p>
                  <p className="artwork-info">
                    {item.medium} / {item.dimensions}
                  </p>
                  <button className="view-button"
                    onClick={() => navigate(`/artwork/${item.id}`)}>
                    View Artwork
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;