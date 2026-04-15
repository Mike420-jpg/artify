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
import "./SuperSideNav.css";

import logo from './Images/Artify_Logo.png';
import UserIcon from './Images/user.png';
import dashboard from './Images/dashboard.png';
import approval from './Images/approval.png';
import artworks from './Images/artworks.png';
import transactions from './Images/transactions.png';
import archive from './Images/archive.png';
import account from './Images/account.png';
import logout from './Images/logout.png';

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
                <div className="Placement">
                    <img src={logo} alt="Artify Logo" id="Logo" /> <br/>
                    <img src={UserIcon} alt="User Icon" id="UserIcon" />
                </div>
      <div className="list">
        <Link to="/super-dashboard"><img src={dashboard} className="icons" alt="Dashboard" /> Dashboard</Link>
        <Link to="/super-dashboard/approval"><img src={approval} className="icons" alt="Approval" />Approval</Link>
        <Link to="/super-dashboard/artworks"><img src={artworks} className="icons" alt="Artworks" />Artworks</Link>
        <Link to="/super-dashboard/transactions"><img src={transactions} className="icons" alt="Transactions" />Transactions</Link>
        <Link to="/super-dashboard/archive"><img src={archive} className="icons" alt="Archive" />Archive</Link>
        <Link to="/super-dashboard/account"><img src={account} className="icons" alt="Account" />Account</Link>
      </div>
      

      <div onClick={handleLogout} style={{ cursor: "pointer", marginTop: "20px" }}>
          <div className="logout">
            <Link to="Login"> 
              <img src={logout} className="icons" alt="Logout" /> Logout
            </Link>
          </div>
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