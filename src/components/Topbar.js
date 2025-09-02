// src/components/Topbar.js
import React from "react";
import { FaSearch, FaBell, FaCog, FaUser } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import "../styles/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <FaSearch className="search-icon" />
      </div>

      {/* Right Icons */}
      <div className="topbar-icons">
        <BsMoon className="icon" />
        <FaBell className="icon" />
        <FaCog className="icon" />
        <FaUser className="icon" />
      </div>
    </div>
  );
};

export default Topbar;
