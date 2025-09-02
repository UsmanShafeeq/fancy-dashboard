import React from "react";
import "./../styles/LineChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "plane", us: 500, france: 300, japan: 100 },
  { name: "helicopter", us: 450, france: 280, japan: 90 },
  { name: "boat", us: 460, france: 320, japan: 200 },
  { name: "train", us: 470, france: 310, japan: 150 },
  { name: "subway", us: 400, france: 200, japan: 50 },
  { name: "bus", us: 520, france: 360, japan: 180 },
  { name: "car", us: 530, france: 400, japan: 120 },
  { name: "moto", us: 540, france: 380, japan: 220 },
  { name: "bicycle", us: 420, france: 300, japan: 250 },
  { name: "horse", us: 350, france: 250, japan: 40 },
  { name: "skateboard", us: 480, france: 320, japan: 70 },
  { name: "others", us: 490, france: 290, japan: 130 },
];

export default function RevenueLineChart() {
  return (
    <div className="bg-[#0b132b] text-white p-4 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-2 text-green-400">
        Revenue Generated: $59,342.32
      </h2>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2c3e50" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="us" stroke="#ff9aa2" strokeWidth={2} dot />
          <Line type="monotone" dataKey="france" stroke="#a29bfe" strokeWidth={2} dot />
          <Line type="monotone" dataKey="japan" stroke="#00cec9" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    </div>
    
  );
}
