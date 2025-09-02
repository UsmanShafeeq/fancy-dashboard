import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "./../styles/SaleQualityChart.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SaleQualityBarChart() {
  const data = {
    labels: ["High Quality", "Medium Quality", "Low Quality"],
    datasets: [
      {
        label: "Sale Quality",
        data: [45, 30, 25], // Example values
        backgroundColor: [
          "#34d399", // green
          "#f59e0b", // orange
          "#f87171", // red
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#f1f5f9", // light labels for black background
        },
      },
      title: {
        display: true,
        text: "Sale Quality",
        color: "#f1f5f9",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#f1f5f9" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "#f1f5f9" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default SaleQualityBarChart;
