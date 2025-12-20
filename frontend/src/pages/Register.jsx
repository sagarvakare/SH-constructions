import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({ username: "", password: "", role: "USER" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Send role explicitly to backend
      await axios.post("https://jr-constructions-backend.onrender.com/auth/register", formData);
      alert(`Registration Successful! You can now login as ${formData.role}.`);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed. Try a different username.");
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
            >
              <option value="USER">User (Standard)</option>
              <option value="ADMIN">Admin (Manager)</option>
            </select>
          </div>

          <button className="w-full bg-jr-blue text-white py-3 rounded font-bold hover:bg-blue-800 transition">
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
           Already have an account? <Link to="/login" className="text-jr-orange font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Register;