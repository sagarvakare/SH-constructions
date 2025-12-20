// src/App.jsx
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import ModernHome from "./pages/ModernHome";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Check Login Status on Load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");
    if (token && username) {
      setUser({ name: username, isAdmin: true }); 
    }
  }, []);

  // 2. Login Function (Passed to Login Page)
  const handleLogin = (username, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", username);
    setUser({ name: username, isAdmin: true });
    navigate("/"); // Redirect to Home instantly
  };

  // 3. Logout Function (Passed to Navbar)
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar stays on top */}
      <Navbar user={user} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<ModernHome user={user} />} />
        
        {/* Pass handleLogin so the app knows when we sign in */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;