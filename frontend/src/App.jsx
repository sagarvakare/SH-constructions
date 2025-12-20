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
    // 1. Restore session on refresh
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");
    const role = localStorage.getItem("role"); // Read stored role

    if (token && username) {
      setUser({ name: username, role: role });
    }
  }, []);

  const handleLogin = (username, token, role) => {
    // 2. Save Session
    localStorage.setItem("token", token);
    localStorage.setItem("user", username);
    localStorage.setItem("role", role);
    
    // 3. Update State
    setUser({ name: username, role: role });

    // 4. Redirect based on Role (The Critical Fix)
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
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Show Navbar ONLY if NOT Admin Dashboard */}
      {user?.role !== 'ADMIN' && <Navbar user={user} onLogout={handleLogout} />}

      <Routes>
        {/* PUBLIC HOME - If Admin tries to go here, send them to dashboard? Optional. */}
        <Route path="/" element={<ModernHome />} />
        
        {/* PROTECTED ADMIN ROUTE */}
        <Route path="/admin-dashboard" element={
          user?.role === 'ADMIN' ? (
            <AdminDashboard onLogout={handleLogout} />
          ) : (
            // If not admin, kick them to login
            <Navigate to="/login" replace />
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