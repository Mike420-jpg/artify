import React from 'react';

function WelcomeSalesRow() {
  const stats = [
    { value: '1250', label: 'Total Orders' },
    { value: '24', label: 'New Artworks' },
    { value: 'P250K', label: 'Total Revenue' },
    { value: '3,600', label: 'Website Visits' }
  ];

  return (
    <div className="welcome-sales-row">
      <section className="welcome-section">
        <div className="welcome-content">
          <p className="welcome-text">Welcome back,</p>
          <h2>Sabrina Carpenter</h2>
          <p className="role">Gallery Manager</p>
        </div>
      </section>

      <section className="sales-overview">
        <div className="sales-overview-card">
          <h3>Sales Overview</h3>
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

export default WelcomeSalesRow;
