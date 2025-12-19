import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jr-constructions-clone.onrender.com/auth/login", 
        { username, password }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", username);
      navigate("/dashboard"); 

    } catch (error) {
      console.error(error);
      alert("Invalid Credentials or Server Error");
    }
  };

  return (
    // FULL SCREEN CONTAINER WITH GRADIENT BACKGROUND
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
      
      {/* WHITE CARD */}
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          New here? <Link to="/register" className="text-blue-600 hover:underline font-bold">Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;