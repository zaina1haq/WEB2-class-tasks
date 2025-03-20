import React from "react";
import "./Flight.css";

const Flight = () => {
  return (
    <div className="flight-container">
      <h1>Recent Searches</h1>
      <div className="recent-search">
  <div className="search-item">
    <p>SIN ➔ LAX</p>
    <span>(7 Sep 2021)</span>
  </div>
  <div className="search-item">
    <p>MY ➔ DUB</p>
    <span>(9 Sep 2021)</span>
  </div>
</div>


     
    </div>
  );
};

export default Flight;
