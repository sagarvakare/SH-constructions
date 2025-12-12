import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* We will build these soon */}
        <Route path="/" element={<h1 className="text-3xl text-center mt-10">Welcome to JR Constructions</h1>} />
        <Route path="/admin/dashboard" element={<h1 className="text-3xl text-center mt-10">Admin Dashboard (Protected)</h1>} />
      </Routes>
    </Router>
  );
}

export default App;