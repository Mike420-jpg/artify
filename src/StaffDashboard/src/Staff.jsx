import React from 'react';
import Header from './components/Header';
import WelcomeSalesRow from './components/WelcomeSalesRow';
import ArtistsSection from './components/ArtistsSection';
import RecentSales from './components/RecentSales';

function App() {
  return (
    <div className="container">
      <Header />
      <WelcomeSalesRow />
      <ArtistsSection />
      <RecentSales />
    </div>
  );
}

export default App;
