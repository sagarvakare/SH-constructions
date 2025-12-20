import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";         // <--- Import Footer
import ScrollToTop from "./components/ScrollToTop"; // <--- Import Scroll Button
import ModernHome from "./pages/ModernHome";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 flex flex-col">
      <Navbar user={user} onLogout={handleLogout} />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<ModernHome user={user} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      <ScrollToTop /> {/* <--- Add the Magic Button */}
      <Footer />      {/* <--- Add the Professional Footer */}
    </div>
  );
}

export default App;