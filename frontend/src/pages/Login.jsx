import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // SENIOR LEVEL: Function to decode JWT Token manually
  // This ensures we get the role even if the backend response doesn't explicitly state it.
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://jr-constructions-backend.onrender.com/auth/login",
        formData
      );

      // 1. Get Token and Role from response
      const token = response.data.token || response.data;
      let role = response.data.role;
      
      // 2. If role not in response, try to decode from JWT token
      if (!role && token) {
        const decoded = parseJwt(token);
        role = decoded?.role || decoded?.roles; // Check for 'role' or 'roles' claim
      }

      // 3. Fallback if role still not found
      if (!role) {
        // Remove "ROLE_" prefix if present
        const decoded = parseJwt(token);
        if (decoded && decoded.role) {
          role = decoded.role.replace(/^ROLE_/, '');
        } else {
          // Last resort fallback
          role = formData.username.toLowerCase() === 'admin' ? 'ADMIN' : 'USER';
        }
      } else {
        // Remove "ROLE_" prefix if present in the role from response
        role = role.replace(/^ROLE_/, '');
      }

      // 4. Normalize Role (Always Uppercase)
      const finalRole = role.toString().toUpperCase();

      console.log("Login Success:", { username: formData.username, role: finalRole }); // Debug log

      // 4. Send to App.jsx
      onLogin(formData.username, token, finalRole);

    } catch (err) {
      console.error("Login Error:", err);
      const errorMessage = err.response?.data?.message || err.response?.data || err.message || "Login failed. Please check username/password.";
      setError(typeof errorMessage === 'string' ? errorMessage : "Login failed. Please check username/password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-jr-blue">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Secure Login</h2>
        
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm font-bold">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input 
              name="username" 
              onChange={e => setFormData({...formData, username: e.target.value})} 
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-jr-orange outline-none" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              name="password" 
              type="password" 
              onChange={e => setFormData({...formData, password: e.target.value})} 
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-jr-orange outline-none" 
              required 
            />
          </div>
          
          <button disabled={isLoading} className="w-full bg-jr-blue text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition transform active:scale-95">
            {isLoading ? "Verifying..." : "Login to Dashboard"}
          </button>
        </form>
        
        <div className="mt-6 text-center border-t pt-4">
          <p className="text-sm text-gray-500">Need an account?</p>
          <Link to="/register" className="text-jr-orange font-bold hover:underline">Register New User</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;