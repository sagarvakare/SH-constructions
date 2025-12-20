// src/pages/Login.jsx
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// ACCEPT PROPS HERE vvv
function Login({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Use your Render Backend URL here
      const response = await axios.post(
        "https://jr-constructions-backend.onrender.com/auth/login",
        formData
      );

      // CALL THE PARENT FUNCTION
      onLogin(formData.username, response.data.token);

    } catch (err) {
      console.error("Login Error:", err);
      setError("Invalid username or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        
        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-5">
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" required />
          
          <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            {isLoading ? "Checking..." : "Sign In"}
          </button>
        </form>
        
        <p className="mt-6 text-center text-gray-600 text-sm">
          No account? <Link to="/register" className="text-blue-600 font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;