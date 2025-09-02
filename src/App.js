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

        {/* Main Section */}
        <div className="main-section">
          {/* Topbar */}
          <header className="topbar">
            <Topbar />
          </header>

          {/* Content */}
          <main className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />             
              <Route path="/manageteam" element={<ManageTeam />} />  
              <Route path="/contact" element={<ContactPage />} />    
              <Route path="/profileform" element={<ProfileForm />} /> 
            </Routes>
          </main>

          {/* ✅ Footer outside main */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
