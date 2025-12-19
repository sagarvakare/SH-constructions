import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");         // Stores the error message
  const [isLoading, setIsLoading] = useState(false); // Tracks if we are waiting
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // 1. Start Loading
    setError("");       // 2. Clear old errors

    try {
      const response = await axios.post(
        "https://jr-constructions-clone.onrender.com/auth/login",
        { username, password }
      );

      // Success!
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", username);
      navigate("/dashboard");

    } catch (err) {
      // Failure Handling
      console.error("Login Error:", err);

      if (err.response && err.response.status === 401) {
        setError("❌ Incorrect username or password.");
      } else if (err.code === "ERR_NETWORK") {
        setError("⚠️ Cannot connect to server. Please check your internet or try again later.");
      } else {
        setError("❌ Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false); // 3. Stop Loading (whether success or fail)
    }
  };

  return (
    // BLUE BACKGROUND
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      
      {/* WHITE CARD */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Please sign in to continue</p>

        {/* ERROR MESSAGE BOX */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 text-sm rounded-lg flex items-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full font-bold py-3 rounded-lg text-white shadow-md transition duration-300 ${
              isLoading 
                ? "bg-gray-400 cursor-not-allowed" // Gray if loading
                : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg" // Blue if active
            }`}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:text-blue-800 font-bold transition">
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;