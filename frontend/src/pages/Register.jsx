import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER"); // Default to USER
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Send data to your backend
      await axios.post("https://jr-constructions-clone.onrender.com/auth/register", {
        username,
        password,
        role
      });
      alert("Registration Successful! Please Login.");
      navigate("/login"); // Send them to login page
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed. Username might already exist.");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleRegister} style={{ display: "inline-block", textAlign: "left" }}>
        
        {/* Username */}
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label><br/>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label><br/>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        {/* Role Selection (Admin vs User) */}
        <div style={{ marginBottom: "20px" }}>
          <label>I am a:</label><br/>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="USER">User (Customer)</option>
            <option value="ADMIN">Admin (Builder)</option>
          </select>
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <p style={{ marginTop: "20px" }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;