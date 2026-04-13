import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header.jsx';
import WelcomeSalesRow from './components/WelcomeSalesRow';
import ArtistsSection from './components/ArtistsSection';
import RecentSales from './components/RecentSales';

function StaffHome() {
  return (
    <div className="container">
      <Header />
      <WelcomeSalesRow />
      <ArtistsSection />
      <RecentSales />
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