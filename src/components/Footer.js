// Footer.js
import React from "react";
import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3>Fancy Admin</h3>
          <p>Empowering your dashboard with sleek design and functionality.</p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Dashboard</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h4>Contact</h4>
          <p>Email: support@fancyadmin.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Fancy Admin. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
