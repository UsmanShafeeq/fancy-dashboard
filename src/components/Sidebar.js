import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaEnvelope,
  FaFileInvoice,
  FaUser,
  FaCalendar,
  FaQuestionCircle,
  FaChartBar
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <h1 className="sidebar-logo">Fancy Admin</h1>

      {/* Profile */}
      <div className="sidebar-profile">
        <img
          src="https://i.pinimg.com/736x/3c/64/0d/3c640ddfb40c8f35967a688bfc6f1e12.jpg"
          alt="profile"
          className="profile-img"
        />
        <h2 className="profile-name">Nexx</h2>
        <p className="profile-role">Awesome Admin</p>
      </div>

      {/* Navigation */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/">
            <FaHome /> <span>Dashboard</span>
          </Link>
        </li>
      </ul>

      <p className="menu-heading">Data</p>
      <ul className="sidebar-menu">
        <li>
          <Link to="/manageteam">
            <FaUsers /> <span>Manage Team</span>
          </Link>
        </li>
        <li>
          <Link to="/contact"> {/* ✅ Corrected route */}
            <FaEnvelope /> <span>Contacts Information</span>
          </Link>
        </li>
        <li>
          <Link to="/invoices">
            <FaFileInvoice /> <span>Invoices Balances</span>
          </Link>
        </li>
      </ul>

      <p className="menu-heading">Pages</p>
      <ul className="sidebar-menu">
        <li>
          <Link to="/ProfileForm">
            <FaUser /> <span>Profile Form</span>
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            <FaCalendar /> <span>Calendar</span>
          </Link>
        </li>
        <li>
          <Link to="/faq">
            <FaQuestionCircle /> <span>FAQ Page</span>
          </Link>
        </li>
      </ul>

      <p className="menu-heading">Charts</p>
      <ul className="sidebar-menu">
        <li>
          <Link to="/barchart">
            <FaChartBar /> <span>Bar Chart</span>
          </Link>
        </li>
        <li>
          <Link to="/piechart">
            <FaChartBar /> <span>Pie Chart</span>
          </Link>
        </li>
        <li>
          <Link to="/linechart">
            <FaChartBar /> <span>Line Chart</span>
          </Link>
        </li>
        <li>
          <Link to="/geochart">
            <FaChartBar /> <span>Geography Chart</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
