import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import ManageTeam from "./pages/ManageTeam";   // ✅ Manage Team page
import ContactPage from "./pages/ContactPage"; // ✅ Contact Information page
import Footer from "./components/Footer";
import ProfileForm from "./pages/ProfileForm";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <Sidebar />
        </aside>

        {/* Main Content Area */}
        <div className="main-section">
          {/* Topbar */}
          <header className="topbar">
            <Topbar />
          </header>

          {/* Pages */}
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />             {/* Default */}
              <Route path="/manageteam" element={<ManageTeam />} />  {/* Manage Team */}
              <Route path="/contact" element={<ContactPage />} />    {/* Contact Information */}
              <Route path="/ProfileForm" element={<ProfileForm />} />    {/* Contact Information */}
            </Routes>
          </main>

          
        </div>
      </div>
    </Router>
  );
}

export default App;
