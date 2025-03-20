import React from "react";
import "./Search.css";

const Search=()=> {
  return (
    <div className="search-container">
      <h1 className="title">Let's explore & travel the world</h1>
      <p className="subtitle">
        Find the best destinations and the most popular stays!
      </p>

      <div className="search-box">
        <h5 className="search-title">SEARCH FLIGHTS</h5>

        <div className="input-group">
          <div className="input-field">
            <label>Departure</label>
            <input type="text" placeholder="Singapore (SIN)" />
          </div>
          <div className="input-field">
            <label>Arrival</label>
            <input type="text" placeholder="Los Angeles (LA)" />
          </div>
          <div className="input-field">
            <label>Date</label>
            <input type="date" defaultValue="2022-05-01" />
          </div>
          <div className="input-field">
            <div className="options">
              <label>
                <input type="radio" name="trip" /> Return
              </label>
              <label>
                <input type="radio" name="trip" default /> One-way
              </label>
            </div>
            <button className="search-btn">SEARCH FLIGHTS</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search