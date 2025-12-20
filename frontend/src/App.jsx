import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ModernHome from "./pages/ModernHome";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load User from LocalStorage on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("user");
    if (token && username) {
      setUser({ name: username, isAdmin: true });
    }
  }, []);

  const handleLogin = (username, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", username);
    setUser({ name: username, isAdmin: true });
    navigate("/"); // Redirect to Home
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<ModernHome user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;