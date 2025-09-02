import React from "react";
import { Pie } from "react-chartjs-2";
import "./../styles/PieChart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ["Emails", "Sales", "Clients", "Traffic"],
    datasets: [
      {
        label: "Dashboard Data",
        data: [12, 43, 32, 13], // Example values
        backgroundColor: [
          "#22d3ee",
          "#34d399",
          "#a78bfa",
          "#f59e0b"
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}

export default PieChart;
