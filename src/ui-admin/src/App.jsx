import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import SideNav from "./SideNav.jsx";
import Dashboard from "./Dashboard.jsx";
import Approval from "./Approval.jsx";
import Artworks from "./Artworks.jsx";
import Transactions from "./Transactions.jsx";
import Archive from "./Archive.jsx";

function App() {
  return (
    <Router>
      <SideNav />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Approval" element={<Approval />} />
        <Route path="/Artworks" element={<Artworks />} />
        <Route path="/Transactions" element={<Transactions />} />
        <Route path="/Archive" element={<Archive />} />
      </Routes>
    </Router>
  );
}

export default App;