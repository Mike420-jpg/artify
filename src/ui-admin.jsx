import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { signOut } from "firebase/auth";
import { auth } from "./firebase"; 

import './Dashboard.css';
import './Approval.css';
import './Artworks.css';
import './Transactions.css';
import './Archive.css';
import './SideNav.css';

const SideNav = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate("/LoginRegister");
  };

  return (
    <div className="sidenav">
      <div className="Placement">
        <h3>ADMIN</h3>
      </div>

      <div className="list">
        <Link to="/admin-dashboard">Dashboard</Link>
      </div>

      <div className="list">
        <Link to="/admin-dashboard/approval">Approval</Link>
      </div>

      <div className="list">
        <Link to="/admin-dashboard/artworks">Artworks</Link>
      </div>

      <div className="list">
        <Link to="/admin-dashboard/transactions">Transactions</Link>
      </div>

      <div className="list">
        <Link to="/admin-dashboard/archive">Archive</Link>
      </div>

      <div className="logout" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
};
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="dashboard-main">
        <h1 className="welcome">Welcome, Admin!</h1>

        <div className="container">
          <div className="RegUsers"><p>Registered Users</p></div>
          <div className="UploadedArt"><p>Uploaded Artworks</p></div>
          <div className="Transact"><p>Transactions</p></div>
        </div>

        <div className="RecentUpload">
          <p>Recent Uploaded Artworks</p>

          <div className="columns">
            <p>Artwork</p>
            <p>Artist</p>
            <p>Price</p>
            <p>Status</p>
            <p>Uploaded at</p>
          </div>

          <div className="gray-box"></div>
        </div>
      </div>
    </div>
  );
};

const Approval = () => {
  return (
    <div className="Approval">
      <div className="approval-main">
        <h1 className="welcome">Pending Artworks for Approval</h1>

        <div className="approval-columns">
          <p>Artwork</p>
          <p>Artist</p>
          <p>Name</p>
          <p>Price</p>
          <p>Description</p>
          <p>Information</p>
          <p>Actions</p>
        </div>

        <div className="gray-box"></div>
      </div>
    </div>
  );
};
const Artworks = () => {
  return (
    <div className="Artworks">
      <div className="artworks-main">
        <h1 className="welcome">Approved Artworks</h1>

        <div className="artworks-columns">
          <p>Artwork</p>
          <p>Artist</p>
          <p>Name</p>
          <p>Price</p>
          <p>Description</p>
          <p>Information</p>
          <p>Actions</p>
        </div>

        <div className="gray-box"></div>
      </div>
    </div>
  );
};
const Transactions = () => {
  return (
    <div className="Transactions">
      <div className="transactions-main">
        <h1 className="welcome">Recent Transactions</h1>

        <div className="columns">
          <p>ID</p>
          <p>Buyer</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Payment</p>
          <p>Amount</p>
          <p>Status</p>
          <p>Date</p>
          <p>Items</p>
        </div>

        <div className="gray-box"></div>
      </div>
    </div>
  );
};

const Archive = () => {
  return (
    <div className="Archive">
      <div className="archive-main">
        <h1 className="welcome">Archived Artworks</h1>

        <div className="columns">
          <p>Artwork</p>
          <p>Artist</p>
          <p>Name</p>
          <p>Price</p>
          <p>Description</p>
          <p>Information</p>
          <p>Actions</p>
        </div>

        <div className="gray-box"></div>
      </div>
    </div>
  );
};

function AdminApp() {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="approval" element={<Approval />} />
          <Route path="artworks" element={<Artworks />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="archive" element={<Archive />} />
        </Routes>
      </div>
    </div>
  );
}


export default AdminApp;