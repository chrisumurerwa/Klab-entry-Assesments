import React from 'react';
import '../styles/Main.css'
function Main() {
  return (
    <div className="dashboard-container1">
      <h1 className="dashboard-title">Dashboard</h1>
      
      <div className="stats-cards">
        <div className="stats-card">
          <p className="card-label">Total Cows</p>
          <h2 className="card-value">300</h2>
        </div>
        
        <div className="stats-card">
          <p className="card-label">Milk Production</p>
          <h2 className="card-value">170 L</h2>
          <span className="time-period">Last 7 days</span>
        </div>
        
        <div className="stats-card">
          <p className="card-label">Total Births</p>
          <h2 className="card-value">98</h2>
          <span className="time-period">Last 30 days</span>
        </div>
      </div>
      
      <div className="charts-container">
        <div className="chart-section">
          <div className="chart-header">
            <h2 className="chart-title">Milk Production</h2>
            <span className="chart-period">Last 7 days</span>
          </div>
          <div className="chart-placeholder"></div>
        </div>
        
        <div className="chart-section">
          <div className="chart-header">
            <h2 className="chart-title">Births</h2>
            <span className="chart-period">Last 7 days</span>
          </div>
          <div className="chart-placeholder"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;

