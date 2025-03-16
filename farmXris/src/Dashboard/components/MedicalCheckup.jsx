import React, { useState } from 'react';
import '../styles/MedicalCheckup.css';

function MedicalCheckup() {
  // Sample data for demonstration
  const [checkups, setCheckups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [illnessFilter, setIllnessFilter] = useState('');

  // Handle new checkup creation
  const handleNewCheckup = () => {
    alert('New Medical Checkup form would open here');
  };

  // Handle search by Cow ID
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle date filter change
  const handleDateFilter = (e) => {
    setDateFilter(e.target.value);
  };

  // Handle illness filter change
  const handleIllnessFilter = (e) => {
    setIllnessFilter(e.target.value);
  };

  // Previous page navigation
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page navigation
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="medical-checkup-container">
      <h1>Medical Checkups</h1>
      
      <div className="filters-row">
        <input 
          type="text" 
          placeholder="Search by Cow ID" 
          className="search-input"
          value={searchTerm}
          onChange={handleSearch}
        />
        
        <div className="filters-row">
        
        <input type="date" className="date-input" />
        
      </div>
        
        <div className="filter-dropdown-container">
          <select 
            className="filter-dropdown"
            value={illnessFilter}
            onChange={handleIllnessFilter}
          >
            <option value="">Filter by Illness</option>
            <option value="mastitis">Mastitis</option>
            <option value="lameness">Lameness</option>
            <option value="respiratory">Respiratory Infection</option>
            <option value="digestive">Digestive Issues</option>
          </select>
        </div>
        
        <button className="new-checkup-btn" onClick={handleNewCheckup}>
          <span className="plus-icon">+</span> New Medical Checkup
        </button>
      </div>
      
      <div className="table-container">
        <table className="checkups-table">
          <thead>
            <tr>
              <th>COW ID</th>
              <th>CHECKUP DATE</th>
              <th>ILLNESS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {checkups.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">
                  <div className="no-data-container">
                    <h2>List of Medical Checkups</h2>
                  </div>
                </td>
              </tr>
            ) : (
              checkups.map((checkup) => (
                <tr key={checkup.id}>
                  <td>{checkup.cowId}</td>
                  <td>{checkup.date}</td>
                  <td>{checkup.illness}</td>
                  <td>
                    <button className="action-btn">View</button>
                    <button className="action-btn">Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <div className="pagination">
        <div className="pagination-info">
          Showing {checkups.length > 1? 1 :0 } to {checkups.length} of Checkups
        </div>
        <div className="pagination-controls">
          <button className="pagination-btn" onClick={handlePrevious}>
            &lt; Previous
          </button>
          <button className="pagination-btn" onClick={handleNext}>
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default MedicalCheckup;