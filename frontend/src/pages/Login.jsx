import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Auth.css"; // <--- Import the CSS here

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
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Welcome Back</h2>
        <form onSubmit={handleLogin}>
          
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Enter your username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="auth-btn">Sign In</button>
        </form>

        <p className="auth-link">
          New here? <Link to="/register">Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;