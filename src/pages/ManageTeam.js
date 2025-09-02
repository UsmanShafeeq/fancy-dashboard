// ManageTeam.js
import React from "react";
import "./../styles/ManageTeam.css";

const teamData = [
  {
    id: "EMP001",
    name: "John Doe",
    role: "Project Manager",
    department: "IT",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    role: "UI/UX Designer",
    department: "Design",
    email: "jane.smith@example.com",
    phone: "+1 987 654 321",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "EMP003",
    name: "David Johnson",
    role: "Software Engineer",
    department: "Development",
    email: "david.j@example.com",
    phone: "+1 456 789 123",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },

  {
    id: "EMP003",
    name: "David Johnson",
    role: "Software Engineer",
    department: "Development",
    email: "david.j@example.com",
    phone: "+1 456 789 123",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },

  {
    id: "EMP003",
    name: "David Johnson",
    role: "Software Engineer",
    department: "Development",
    email: "david.j@example.com",
    phone: "+1 456 789 123",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },

  {
    id: "EMP003",
    name: "David Johnson",
    role: "Software Engineer",
    department: "Development",
    email: "david.j@example.com",
    phone: "+1 456 789 123",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },

];

function ManageTeam() {
  return (
    <div className="manage-team-container">
      <h2 className="page-title" style={{ color: "white" }}>👨‍💻 Manage Team</h2>
      <div className="team-grid">
        {teamData.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.image} alt={member.name} className="team-img" />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p><strong>ID:</strong> {member.id}</p>
            <p><strong>Department:</strong> {member.department}</p>
            <p><strong>Email:</strong> {member.email}</p>
            <p><strong>Phone:</strong> {member.phone}</p>
            <button className="view-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageTeam;
