// Import React and CSS file for styling
import React, { useState } from "react";
import "./../styles/ProfileForm.css";

function ProfileForm() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    profileImage: null, // For file upload
  });

  // Handle input change (for text, email, select, etc.)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // handle both text and file input
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Submitted:", formData); // Debug: check data in console
    alert("Profile submitted successfully! ✅");
  };

  return (
    <div className="page-container">
      {/* Centered Form Container */}
      <div className="form-card">
       

        <h2 className="form-title">Profile Information 📝</h2>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="profile-form">
          {/* Name */}
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          {/* Department Dropdown */}
          <div className="form-group">
            <label>Department:</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Department --</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Role */}
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter your role (e.g. Manager)"
            />
          </div>

          {/* Profile Picture Upload */}
          <div className="form-group">
            <label>Profile Picture:</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
