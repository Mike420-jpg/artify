import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import Footer from "./Footer.jsx";

function Categories() {
  const navigate = useNavigate();
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [collapsedCategories, setCollapsedCategories] = useState({
    Painting: false,
    Sculpture: false,
    Portrait: false,
    Photography: false,
    Printmaking: false,
    Ceramic: false,
  });

  const categoriesData = [
    {
      name: "Painting",
      subcategories: ["Watercolor", "Oil", "Acrylic", "Gouache", "Spray"],
    },
    {
      name: "Sculpture",
      subcategories: [
        "Carving (Wood/Stone)",
        "Modeling (Clay/Wax)",
        "Casting (Metal/Resin)",
        "Assemblage",
        "Stone",
      ],
    },
    {
      name: "Portrait",
      subcategories: ["Pencil", "Ink", "Charcoal", "Pastel"],
    },
    {
      name: "Photography",
      subcategories: [],
    },
    {
      name: "Printmaking",
      subcategories: [
        "Woodcut",
        "Linocut",
        "Etching",
        "Lithography",
        "Screen Printing",
      ],
    },
    {
      name: "Ceramic",
      subcategories: [
        "Pottery",
        "Hand-built Ceramics",
        "Porcelain Work",
        "Stoneware",
        "Earthenware",
      ],
    },
  ];

  const toggleCategory = (categoryName) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleSubcategoryClick = (category, subcategory) => {
    setSelectedSubcategory(subcategory);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewArtwork = (artworkId) => {
    navigate(`/artwork/${artworkId}`);
  };

  const allFeaturedItems = [
    {
      id: 1,
      title: "I Want You To Bloom A Flower In Your Fantasy",
      artist: "Joshua Shin",
      country: "South Korea",
      medium: "Color on Canvas",
      dimensions: "78.8 x 47.2 in",
      price: 999,
      category: "Painting",
      subcategory: "Watercolor",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "I Want You To Bloom A Flower In Your Fantasy",
      artist: "Joshua Shin",
      country: "South Korea",
      medium: "Color on Canvas",
      dimensions: "78.8 x 47.2 in",
      price: 999,
      category: "Painting",
      subcategory: "Oil",
      image: "/images/On-Earth-As-It-Is-In-Heaven-Web2020.jpg",
    },
    {
      id: 3,
      title: "Abstract Thoughts",
      artist: "Maria Santos",
      country: "Philippines",
      medium: "Oil on Canvas",
      dimensions: "60 x 40 in",
      price: 1500,
      category: "Painting",
      subcategory: "Acrylic",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Stone Guardian",
      artist: "David Chen",
      country: "China",
      medium: "Marble Sculpture",
      dimensions: "24 x 12 x 8 in",
      price: 2500,
      category: "Sculpture",
      subcategory: "Carving (Wood/Stone)",
      image: "/images/pexels-photo-237266.jpeg",
    },
    {
      id: 5,
      title: "Urban Portrait",
      artist: "Emma Watson",
      country: "UK",
      medium: "Charcoal on Paper",
      dimensions: "30 x 40 in",
      price: 800,
      category: "Portrait",
      subcategory: "Charcoal",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Woodcut Dreams",
      artist: "Tanaka Hiroshi",
      country: "Japan",
      medium: "Woodcut Print",
      dimensions: "24 x 36 in",
      price: 600,
      category: "Printmaking",
      subcategory: "Woodcut",
      image: "/images/DragonSkin-1800.jpg",
    },
    {
      id: 7,
      title: "Ancient Vase Series",
      artist: "Sophia Lee",
      country: "Korea",
      medium: "Ceramic",
      dimensions: "18 x 12 in",
      price: 450,
      category: "Ceramic",
      subcategory: "Pottery",
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop",
    },
    {
      id: 8,
      title: "Modern Abstract",
      artist: "James Wilson",
      country: "USA",
      medium: "Acrylic on Canvas",
      dimensions: "48 x 36 in",
      price: 1200,
      category: "Painting",
      subcategory: "Acrylic",
      image: "/images/Art 2.webp",
    },
    {
      id: 9,
      title: "Bronze Warrior",
      artist: "Marco Rossi",
      country: "Italy",
      medium: "Bronze Casting",
      dimensions: "36 x 18 x 12 in",
      price: 3200,
      category: "Sculpture",
      subcategory: "Casting (Metal/Resin)",
      image: "/images/Art 1.webp",
    },
  ];

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
      <div className="main-layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <span>Categories</span>
            <span className="collapse-icon">⌃</span>
          </div>

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

          {categoriesData.map((category) => (
            <div key={category.name} className="category-group">
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

              {!collapsedCategories[category.name] &&
                category.subcategories.length > 0 && (
                  <ul>
                    {category.subcategories.map((sub) => (
                      <li
                        key={sub}
                        onClick={() => handleSubcategoryClick(category.name, sub)}
                        className={
                          selectedSubcategory === sub ? "active-subcategory" : ""
                        }
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}

              {!collapsedCategories[category.name] &&
                category.subcategories.length === 0 && (
                  <ul>
                    <li className="no-subcategories">Coming soon</li>
                  </ul>
                )}
            </div>
          ))}
        </div>

        <div className="featured-section">
          <h1 className="artify-title">Artify</h1>

          <div className="category-header">
            <h2 className="section-title">
              {selectedSubcategory === "All" ? "All Artworks" : selectedSubcategory}
            </h2>
            <p className="item-count-display">{filteredItems.length} items found</p>
          </div>

          <div className="featured-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="featured-card">
                <div className="featured-image">
                  <img src={item.image} alt={item.title} />
                  <div className="price-tag">₱{item.price.toLocaleString()}</div>
                </div>
                <div className="featured-details">
                  <h3 className="featured-title">{item.title}</h3>
                  <p className="artist-info">
                    {item.artist}, {item.country}
                  </p>
                  <p className="artwork-info">
                    {item.medium} / {item.dimensions}
                  </p>
                  <button
                    className="view-button"
                    onClick={() => handleViewArtwork(item.id)}
                  >
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