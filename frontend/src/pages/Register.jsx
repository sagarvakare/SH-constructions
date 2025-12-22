import { useState } from "react";
import api from "../api"; // ✅ We import 'api', not 'axios'
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({ username: "", password: "", role: "USER" });
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable button while loading

    try {
      // ✅ FIX: Use 'api.post' instead of 'axios.post'
      // ✅ FIX: Remove the full URL (api.js handles it)
      await api.post("/auth/register", formData);
      
      alert(`Registration Successful! Please login.`);
      navigate("/login");

    } catch (err) {
      console.error("Registration Error:", err);
      
      // ✅ BETTER ERROR HANDLING:
      // This will show the REAL error from the backend (e.g., "Username taken")
      // instead of just guessing.
      const errorMessage = err.response?.data?.message || err.message || "Registration failed.";
      alert(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="text" 
            placeholder="Username" 
            onChange={e => setFormData({...formData, username: e.target.value})} 
            className="w-full p-3 border rounded" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={e => setFormData({...formData, password: e.target.value})} 
            className="w-full p-3 border rounded" 
            required 
          />
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">Select Role</label>
            <select 
              onChange={e => setFormData({...formData, role: e.target.value})} 
              className="w-full p-3 border rounded bg-white"
              value={formData.role}
            >
              <option value="USER">User (Standard)</option>
              <option value="ADMIN">Admin (Manager)</option>
            </select>
          </div>

          <button 
            disabled={loading}
            className={`w-full py-3 rounded font-bold text-white transition ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-800'}`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
           Already have an account? <Link to="/login" className="text-orange-500 font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Register;