import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ModernHome from "./pages/ModernHome";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Restore session
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    if (token && username) {
      setUser({ name: username, role: role });
    }
  }, []);

  const handleLogin = (username, token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", username);
    localStorage.setItem("role", role);
    
    setUser({ name: username, role: role });

    // ROUTING LOGIC
    if (role === 'ADMIN') {
      navigate("/admin-dashboard");
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hide Navbar on Admin Dashboard for full-screen feel, show on others */}
      {user?.role !== 'ADMIN' && <Navbar user={user} onLogout={handleLogout} />}

      <Routes>
        {/* PUBLIC HOME */}
        <Route path="/" element={<ModernHome />} />
        
        {/* ADMIN DASHBOARD (Protected) */}
        <Route path="/admin-dashboard" element={
          user?.role === 'ADMIN' ? (
            <AdminDashboard onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        } />

        {/* AUTH */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;