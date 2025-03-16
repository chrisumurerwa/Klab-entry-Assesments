import React, { useState } from 'react';
import '../styles/Milkproduction.css';
import { FaPlus, FaCalendarAlt, FaEdit, FaTrash } from 'react-icons/fa';

function Milkproduction() {
  const [date, setDate] = useState('');
  
  // Sample data - replace with your actual data fetching logic
  const productionData = [
    // You'll populate this with actual data from your backend
  ];

  return (
    <div className="milk-production-container">
      <h1 className="page-title">Milk Production</h1>
      
      <div className="filter-actions-row">
      <div className="filters-row">
        
        <input type="date" className="date-input" />
        
      </div>
        
        <button className="new-production-btn">
          <FaPlus /> New Production
        </button>
      </div>
      
      <div className="production-table-container">
        <table className="production-table">
          <thead>
            <tr>
              <th className="production-date">PRODUCTION DATE</th>
              <th className="quantity">QUANTITY</th>
              <th className="actions">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {productionData && productionData.length > 0 ? (
              productionData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button className="action-btn edit-btn"><FaEdit /></button>
                    <button className="action-btn delete-btn"><FaTrash /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-data-message">No production data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="list-info">
        <h2 className="list-title">List of Milk Production</h2>
      </div>
      
      <div className="list-footer">
        <p className="showing-info">Showing 1 to NaN of Production</p>
        
        <div className="pagination">
          <button className="pagination-btn prev-btn">
            ‹ Previous
          </button>
          <button className="pagination-btn next-btn">
            Next ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Milkproduction;