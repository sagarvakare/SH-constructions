import { useEffect, useState } from 'react';
import api from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Animation

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [services, setServices] = useState([]); // Fetch services to count them
  const [editingId, setEditingId] = useState(null);
  
  const [newProject, setNewProject] = useState({
    title: '', description: '', imageUrl: '', clientName: '', location: '', completionDate: ''
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
    fetchMessages();
    fetchServices();
  }, []);

  const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) { console.error(error); }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/contact', getAuthHeader());
      setMessages(response.data);
    } catch (error) { console.error(error); }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('/api/services');
      setServices(response.data);
    } catch (error) { console.error(error); }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // ... (Keep handleEdit, handleCancelEdit, handleSubmit, handleDelete same as before) ...
  // For brevity, I am re-pasting the core logic below to ensure it fits:
  
  const handleEdit = (project) => {
    setEditingId(project.id);
    setNewProject({
      title: project.title, description: project.description, imageUrl: project.imageUrl,
      clientName: project.clientName, location: project.location, completionDate: project.completionDate || ''
    });
    window.scrollTo({ top: 400, behavior: 'smooth' }); // Scroll to form
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setNewProject({ title: '', description: '', imageUrl: '', clientName: '', location: '', completionDate: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/projects/${editingId}`, newProject, getAuthHeader());
        alert('Updated!');
      } else {
        await axios.post('/api/projects', newProject, getAuthHeader());
        alert('Created!');
      }
      fetchProjects();
      handleCancelEdit();
    } catch (error) { alert('Failed'); }
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Delete?")) return;
    try {
      await axios.delete(`/api/projects/${id}`, getAuthHeader());
      fetchProjects();
    } catch (error) { alert('Failed'); }
  };

  // --- RENDER ---
  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-24">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <div>
            <h1 className="text-4xl font-extrabold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Admin</p>
        </div>
        
        <div className="flex gap-4">
            <Link to="/admin/services" className="bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm font-semibold">
                Manage Services
            </Link>
            <button onClick={handleLogout} className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition shadow-lg shadow-red-200 font-semibold">
                Logout
            </button>
        </div>
      </motion.div>

      {/* --- STATS CARDS (NEW) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
            <h3 className="text-blue-100 text-sm font-semibold uppercase">Total Projects</h3>
            <p className="text-4xl font-bold mt-2">{projects.length}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg shadow-purple-200">
            <h3 className="text-purple-100 text-sm font-semibold uppercase">Client Messages</h3>
            <p className="text-4xl font-bold mt-2">{messages.length}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg shadow-green-200">
            <h3 className="text-green-100 text-sm font-semibold uppercase">Active Services</h3>
            <p className="text-4xl font-bold mt-2">{services.length}</p>
        </motion.div>
      </div>

      {/* --- INBOX --- */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-10 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            <h2 className="text-xl font-bold text-gray-800">Recent Inquiries</h2>
        </div>
        {messages.length === 0 ? (
          <div className="p-8 text-center text-gray-400">No messages yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="py-4 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-gray-50/50 transition">
                    <td className="py-4 px-6 font-semibold text-gray-800">{msg.name}</td>
                    <td className="py-4 px-6 text-blue-600">{msg.email}</td>
                    <td className="py-4 px-6 text-gray-600">{msg.message}</td>
                    <td className="py-4 px-6 text-gray-400 text-sm">{new Date(msg.sentAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>

      {/* --- ADD/EDIT FORM & LIST --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Project' : 'Add New Project'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input className="w-full border bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required />
                    <input className="w-full border bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Client Name" value={newProject.clientName} onChange={e => setNewProject({...newProject, clientName: e.target.value})} />
                    <input className="w-full border bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Location" value={newProject.location} onChange={e => setNewProject({...newProject, location: e.target.value})} />
                    <input className="w-full border bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Image URL" value={newProject.imageUrl} onChange={e => setNewProject({...newProject, imageUrl: e.target.value})} />
                    <input type="date" className="w-full border bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" value={newProject.completionDate} onChange={e => setNewProject({...newProject, completionDate: e.target.value})} />
                    <textarea className="w-full border bg-gray-50 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Description" rows="4" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} />
                    
                    <div className="flex gap-2">
                        {editingId && <button type="button" onClick={handleCancelEdit} className="w-1/3 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold">Cancel</button>}
                        <button type="submit" className={`flex-1 text-white py-3 rounded-lg font-bold shadow-lg transition transform hover:scale-105 ${editingId ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
                            {editingId ? 'Update' : 'Create Project'}
                        </button>
                    </div>
                </form>
            </div>
        </div>

        {/* List */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map(project => (
                <motion.div layout key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                    <div className="h-48 overflow-hidden relative">
                        <img src={project.imageUrl || "https://via.placeholder.com/300"} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow-sm">{project.location}</div>
                    </div>
                    <div className="p-5">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{project.title}</h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex gap-2 pt-2 border-t border-gray-100">
                            <button onClick={() => handleEdit(project)} className="flex-1 text-yellow-600 bg-yellow-50 hover:bg-yellow-100 py-2 rounded-lg text-sm font-semibold transition">Edit</button>
                            <button onClick={() => handleDelete(project.id)} className="flex-1 text-red-600 bg-red-50 hover:bg-red-100 py-2 rounded-lg text-sm font-semibold transition">Delete</button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;