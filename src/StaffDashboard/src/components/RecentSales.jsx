import React from 'react';

function RecentSales() {
  const sales = [
    { artwork: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', buyer: 'Taylor Smith', amount: '₱40,000', image: 'images/artwork1.png' },
    { artwork: 'The Creation of Adam', artist: 'Michelangelo Buonarroti', buyer: 'Emma Mitchell', amount: '₱56,000', image: 'images/artwork2.webp' },
    { artwork: 'The Starry Night', artist: 'Vincent van Gogh', buyer: 'Kho Pickhardt', amount: '₱79,000', image: 'images/artwork3.jpg' },
    { artwork: 'Napoleon Crossing the Alps', artist: 'Jacques-Louis David', buyer: 'Lis Pickhardt', amount: '₱54,000', image: 'images/artwork4.webp' }
  ];

  return (
    <section className="recent-sales">
      <h3>Recent Sales</h3>
      <div className="sales-header">
        <div className="header-item"></div>
        <div className="header-item">Artwork</div>
        <div className="header-item">Buyer</div>
        <div className="header-item">Amount</div>
      </div>
      <div className="sales-list">
        {sales.map((sale, index) => (
          <div key={index} className="sale-item">
            <div className="artwork-thumbnail">
              <img src={sale.image} alt={sale.artwork} />
            </div>
            <div className="sale-details">
              <div className="artwork-name">{sale.artwork}</div>
              <div className="artist-name">{sale.artist}</div>
            </div>
            <div className="buyer-name">{sale.buyer}</div>
            <div className="sale-amount">{sale.amount}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentSales;
