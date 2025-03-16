import React from "react";
import "../styles/Births.css";

function Births() {
  return (
    <div className="births-container">
      <h1 className="page-title">Cow Births</h1>

      <div className="filters-row">
        <input
          type="text"
          placeholder="Search by Cow ID"
          className="search-input"
        />
        <input type="date" className="date-input" />
        <button className="new-birth-btn">+ New birth</button>
      </div>

      <div className="table-container">
        <table className="births-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Birth Date</th>
              <th>Mother ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4" className="no-data">No births recorded</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span className="pagination-info">Showing 1 to NaN of Births</span>
        <div className="pagination-controls">
          <button className="pagination-btn">Previous</button>
          <button className="pagination-btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Births;
