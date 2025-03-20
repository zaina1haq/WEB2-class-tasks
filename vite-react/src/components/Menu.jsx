import React from 'react';
import { FaBed, FaTicketAlt, FaUtensils, FaBus, FaTaxi, FaFilm } from "react-icons/fa";
import './Menu.css'; 

const Menu = () => {
  const menuItems = [
    { icon: <FaBed />, title: 'Hotel', bgColor: '#F9668D' },
    { icon: <FaTicketAlt />, title: 'Attractions', bgColor: '#FF9B53' },
    { icon: <FaUtensils />, title: 'Eats', bgColor: '#36DA76' },
    { icon: <FaBus />, title: 'Commute', bgColor: '#FDBF00' },
    { icon: <FaTaxi />, title: 'Taxi', bgColor: '#4DABFF' },
    { icon: <FaFilm />, title: 'Movies', bgColor: '#79CA00' }
  ];

  return (
    <div className="menu-container">
      <h3 className="menu-title" id="title">PREPARE FOR YOUR TRIP</h3>
      <div className="menu-row">
        {menuItems.map((item, idx) => (
          <div key={idx} className="menu-item">
            <div className="menu-icon" style={{ backgroundColor: item.bgColor }}>
              <span>{item.icon}</span>
            </div>
            <span className="menu-text">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
