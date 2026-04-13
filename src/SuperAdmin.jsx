import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import SuperSideNav from "./SuperSideNav.jsx";
import Dashboard from "./SuperDashboard.jsx";
import Approval from "./SuperApproval.jsx";
import Artworks from "./SuperArtworks.jsx";
import Transactions from "./SuperTransactions.jsx";
import Archive from "./SuperArchive.jsx";
import Account from "./Account.jsx";

function App () {
  return (
    <Router>
      <SuperSideNav />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/SuperDashboard" element={<Dashboard />} />
        <Route path="/SuperApproval" element={<Approval />} />
        <Route path="/SuperArtworks" element={<Artworks />} />
        <Route path="/SuperTransactions" element={<Transactions />} />
        <Route path="/SuperArchive" element={<Archive />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;