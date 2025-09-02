// src/components/Card.js
import React from "react";
import "./../styles/Card.css";

const Card = ({ icon, title, value, percentage, progressColor }) => {
  return (
    <div className="card">
      {/* Left side: Icon + text */}
      <div className="card-left">
        <div className="card-icon">{icon}</div>
        <div className="card-info">
          <h3>{value}</h3>
          <p>{title}</p>
        </div>
      </div>

      {/* Right side: Progress circle */}
      <div className="card-progress">
        <svg className="progress-ring" width="50" height="50">
          <circle
            className="progress-ring-bg"
            stroke="#1e293b"
            strokeWidth="6"
            fill="transparent"
            r="20"
            cx="25"
            cy="25"
          />
          <circle
            className="progress-ring-fill"
            stroke={progressColor || "#38bdf8"}
            strokeWidth="6"
            fill="transparent"
            r="20"
            cx="25"
            cy="25"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${
              2 * Math.PI * 20 * (1 - percentage / 100)
            }`}
          />
        </svg>
        <span className="progress-text">+{percentage}%</span>
      </div>
    </div>
  );
};

export default Card;
