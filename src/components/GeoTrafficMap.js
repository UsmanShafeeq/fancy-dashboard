import React from "react";

const trafficData = {
  US: 5000,
  IN: 3000,
  CN: 2500,
  GB: 1500,
  DE: 1200,
};

const countryColors = (iso) => {
  const traffic = trafficData[iso] || 0;
  if (traffic > 4000) return "#34d399"; // High
  if (traffic > 2000) return "#60a5fa"; // Medium
  if (traffic > 1000) return "#f59e0b"; // Low
  return "#1f2937"; // No traffic
};

function GeoTrafficMap() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <h3
        style={{
          color: "#f1f5f9",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Global Traffic
      </h3>

      {/* SVG World Map */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 1001"
        style={{ width: "100%", height: "auto" }}
      >
        {/* USA */}
        <path
          d="M360 300 L400 280 L440 300 L460 340 L420 360 Z"
          fill={countryColors("US")}
          stroke="#0f172a"
        />
        {/* India */}
        <path
          d="M1400 500 L1440 520 L1420 560 L1380 540 Z"
          fill={countryColors("IN")}
          stroke="#0f172a"
        />
        {/* China */}
        <path
          d="M1500 400 L1560 420 L1540 480 L1480 460 Z"
          fill={countryColors("CN")}
          stroke="#0f172a"
        />
        {/* UK */}
        <path
          d="M950 250 L970 260 L960 280 L940 270 Z"
          fill={countryColors("GB")}
          stroke="#0f172a"
        />
        {/* Germany */}
        <path
          d="M1000 300 L1020 310 L1010 330 L990 320 Z"
          fill={countryColors("DE")}
          stroke="#0f172a"
        />
      </svg>
    </div>
  );
}

export default GeoTrafficMap;
