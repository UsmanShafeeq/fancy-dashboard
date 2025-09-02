// pages/Dashboard.js
import { FiMail, FiShoppingCart, FiUser, FiActivity } from "react-icons/fi";

import Card from "../components/Card";
import RevenueLineChart from "../components/LineChart";
import RecentTransactions from "../components/Transactions";
import PieChart from "../components/PieChart";
import SaleQualityChart from "../components/SaleQualityChart";
import GeoTrafficMap from "../components/GeoTrafficMap";

import "./../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Welcome Message */}
      <h4>Welcome to our Dashboard</h4>

      {/* Top Cards */}
      <div className="dashboard-cards">
        <Card
          icon={<FiMail />}
          title="Emails Sent"
          value="12,361"
          percentage={14}
          progressColor="#22d3ee"
        />
        <Card
          icon={<FiShoppingCart />}
          title="Sales Obtained"
          value="431,225"
          percentage={21}
          progressColor="#34d399"
        />
        <Card
          icon={<FiUser />}
          title="New Clients"
          value="32,441"
          percentage={5}
          progressColor="#a78bfa"
        />
        <Card
          icon={<FiActivity />}
          title="Traffic Received"
          value="1,325,134"
          percentage={43}
          progressColor="#f59e0b"
        />
      </div>

      {/* Chart + Transactions */}
      <div className="chart-section">
        <div className="chart-container">
          <RevenueLineChart />
        </div>
        <div className="transactions-container">
          
          <RecentTransactions />
        </div>
      </div>

      {/* Extra Charts */}
      <div className="extra-charts">
        <div className="chart-container">
          <p>ghgh</p>
          <PieChart />
        </div>
        <div className="chart-container">
          <SaleQualityChart />
        </div>
        <div className="chart-container">
          <GeoTrafficMap />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
