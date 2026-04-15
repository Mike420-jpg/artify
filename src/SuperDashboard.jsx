import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Dashboard.css"
import "./Artworks.css"
import "./Approval.css"
import "./Archive.css"
import "./Transactions.css"
import "./Account.css"

import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function SuperSideNav() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    navigate("/LoginRegister");
  };

  return (
    <div className="supersidenav">
      <h2>Super Admin</h2>

      <Link to="/super-dashboard">Dashboard</Link>
      <Link to="/super-dashboard/approval">Approval</Link>
      <Link to="/super-dashboard/artworks">Artworks</Link>
      <Link to="/super-dashboard/transactions">Transactions</Link>
      <Link to="/super-dashboard/archive">Archive</Link>
      <Link to="/super-dashboard/account">Account</Link>

      <div onClick={handleLogout} style={{ cursor: "pointer", marginTop: "20px" }}>
        Logout
      </div>
    </div>
  );
}

function Dashboard() {
  return <h1>Welcome, Super Admin!</h1>;
}
function Approval() {
  return <h1>Pending Artworks for Approval</h1>;
}
function Artworks() {
  return <h1>Approved Artworks</h1>;
}
function Transactions() {
  return <h1>Transactions</h1>;
}
function Archive() {
  return <h1>Archived Artworks</h1>;
}
function Account() {
  return <h1>Account Center</h1>;
}
function SuperDashboard() {
  return (
    <div style={{ display: "flex" }}>

      <SuperSideNav />

      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="approval" element={<Approval />} />
          <Route path="artworks" element={<Artworks />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="archive" element={<Archive />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </div>

    </div>
  );
}

export default SuperDashboard;