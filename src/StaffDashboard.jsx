import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase";
import "./Staff.css"
function Header() {
  return (
    <header className="header">
      <h1>Staff Dashboard</h1>
      <span className="sales-badge">LIVE DATA</span>
    </header>
  );
}

function WelcomeSalesRow({ stats }) {
  return (
    <div className="welcome-sales-row">
      <section className="welcome-section">
        <div className="welcome-content">
          <p className="welcome-text">Welcome back,</p>
          <h2>Staff User</h2>
          <p className="role">Gallery Staff</p>
        </div>
      </section>

      <section className="sales-overview">
        <div className="sales-overview-card">
          <h3>Live Overview</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ArtistsSection({ artists }) {
  return (
    <section className="artists-section">
      <h3>Artists (From Firestore)</h3>

      <table className="artists-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Artworks</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {artists.map((artist, index) => (
            <tr key={index}>
              <td>
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="artist-avatar"
                />
                {artist.name}
              </td>

              <td>{artist.genre}</td>
              <td>{artist.sold}</td>

              <td>
                <span className={`status ${artist.status.toLowerCase()}`}>
                  {artist.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
function RecentSales({ artworks }) {
  return (
    <section className="recent-sales">
      <h3>Recent Artworks</h3>

      <div className="sales-header">
        <div></div>
        <div>Artwork</div>
        <div>Artist</div>
        <div>Price</div>
      </div>

      <div className="sales-list">
        {artworks.slice(0, 5).map((art, index) => (
          <div key={index} className="sale-item">
            <div className="artwork-thumbnail">
              <img src={art.image} alt={art.title} />
            </div>

            <div className="sale-details">
              <div className="artwork-name">{art.title}</div>
              <div className="artist-name">{art.artist}</div>
            </div>

            <div>{art.artist}</div>
            <div>₱{art.price?.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StaffHome() {
  const [artists, setArtists] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "artworks"));

        let artistMap = {};
        let totalRevenue = 0;

        const artworksList = [];

        snapshot.forEach((doc) => {
          const data = doc.data();

          artworksList.push(data);

          totalRevenue += data.price || 0;

          const name = data.artist;

          if (!artistMap[name]) {
            artistMap[name] = {
              name: name,
              genre: data.category || "Unknown",
              sold: 0,
              status: "Inactive", 
              image: data.image || "/images/default.png"
            };
          }

          artistMap[name].sold += 1;
        });

        const artistArray = Object.values(artistMap);

        setArtists(artistArray);
        setArtworks(artworksList);

        setStats([
          { value: artworksList.length, label: "Total Artworks" },
          { value: artistArray.length, label: "Artists" },
          { value: `₱${totalRevenue.toLocaleString()}`, label: "Revenue" },
          { value: "LIVE", label: "Status" }
        ]);

      } catch (err) {
        console.error("Firestore Error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <WelcomeSalesRow stats={stats} />
      <ArtistsSection artists={artists} />
      <RecentSales artworks={artworks} />
    </div>
  );
}

function StaffLayout() {
  return (
    <Routes>
      <Route path="/" element={<StaffHome />} />
    </Routes>
  );
}

export default StaffLayout;
