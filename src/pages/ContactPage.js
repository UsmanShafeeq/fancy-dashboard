import React from "react";
import "./../styles/ContactPage.css";

const contacts = [
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
    id: "EMP004",
    name: "Emily Davis",
    role: "HR Specialist",
    department: "Human Resources",
    email: "emily.d@example.com",
    phone: "+1 321 654 987",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "EMP005",
    name: "Michael Brown",
    role: "Data Analyst",
    department: "Analytics",
    email: "michael.b@example.com",
    phone: "+1 222 333 444",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: "EMP006",
    name: "Sophia Wilson",
    role: "Marketing Lead",
    department: "Marketing",
    email: "sophia.w@example.com",
    phone: "+1 444 555 666",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: "EMP007",
    name: "James Anderson",
    role: "DevOps Engineer",
    department: "Infrastructure",
    email: "james.a@example.com",
    phone: "+1 777 888 999",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    id: "EMP008",
    name: "Olivia Martinez",
    role: "QA Engineer",
    department: "Quality Assurance",
    email: "olivia.m@example.com",
    phone: "+1 111 222 333",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: "EMP009",
    name: "William Taylor",
    role: "Backend Developer",
    department: "Development",
    email: "william.t@example.com",
    phone: "+1 999 000 111",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: "EMP010",
    name: "Isabella Garcia",
    role: "Content Strategist",
    department: "Content",
    email: "isabella.g@example.com",
    phone: "+1 555 666 777",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
  },
];

function ContactPage() {
  return (
    <div className="contact-page-container">
      <h1 className="page-title">📇 Contact Information</h1>

      <div className="table-container">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="table-img"
                  />
                </td>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.role}</td>
                <td>{contact.department}</td>
                <td>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </td>
                <td>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </td>
                <td>
                  <button className="view-btn">View Profile</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactPage;
