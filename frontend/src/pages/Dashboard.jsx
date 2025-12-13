import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]); 
  const [editingId, setEditingId] = useState(null);
  
  const [newProject, setNewProject] = useState({
    title: '', description: '', imageUrl: '', clientName: '', location: '', completionDate: ''
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
    fetchMessages(); 
  }, []);

  const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/contact', getAuthHeader());
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setNewProject({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      clientName: project.clientName,
      location: project.location,
      completionDate: project.completionDate || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setNewProject({ title: '', description: '', imageUrl: '', clientName: '', location: '', completionDate: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:8080/api/projects/${editingId}`, newProject, getAuthHeader());
        alert('Project Updated Successfully!');
      } else {
        await axios.post('http://localhost:8080/api/projects', newProject, getAuthHeader());
        alert('Project Created Successfully!');
      }
      fetchProjects();
      handleCancelEdit();
    } catch (error) {
      alert('Operation failed.');
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`http://localhost:8080/api/projects/${id}`, getAuthHeader());
      fetchProjects();
    } catch (error) {
      alert('Failed to delete.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* --- HEADER --- */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        
        {/* CORRECTED BUTTON SECTION */}
        <div className="flex gap-4">
            <Link to="/admin/services" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Manage Services
            </Link>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Logout
            </button>
        </div>
      </div>

      {/* --- INBOX SECTION --- */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-purple-600">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Client Messages ({messages.length})</h2>
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Message</th>
                  <th className="py-3 px-6 text-left">Date</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-6 font-bold">{msg.name}</td>
                    <td className="py-3 px-6">{msg.email}</td>
                    <td className="py-3 px-6">{msg.message}</td>
                    <td className="py-3 px-6">{new Date(msg.sentAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* --- PROJECT FORM --- */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-blue-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {editingId ? 'Edit Project' : 'Add New Project'}
          </h2>
          {editingId && <button onClick={handleCancelEdit} className="text-gray-500 underline text-sm">Cancel Edit</button>}
        </div>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Project Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required />
          <input className="border p-2 rounded" placeholder="Client Name" value={newProject.clientName} onChange={e => setNewProject({...newProject, clientName: e.target.value})} />
          <input className="border p-2 rounded" placeholder="Location" value={newProject.location} onChange={e => setNewProject({...newProject, location: e.target.value})} />
          <input className="border p-2 rounded" placeholder="Image URL" value={newProject.imageUrl} onChange={e => setNewProject({...newProject, imageUrl: e.target.value})} />
          <input type="date" className="border p-2 rounded" value={newProject.completionDate} onChange={e => setNewProject({...newProject, completionDate: e.target.value})} />
          <textarea className="border p-2 rounded md:col-span-2" placeholder="Description" rows="3" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} />
          
          <button type="submit" className={`p-2 rounded text-white md:col-span-2 ${editingId ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {editingId ? 'Update Project' : 'Create Project'}
          </button>
        </form>
      </div>

      {/* --- PROJECT LIST --- */}
      <h2 className="text-xl font-bold mb-4">Existing Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow overflow-hidden relative">
            <img src={project.imageUrl || "https://via.placeholder.com/300"} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.location}</p>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(project)} className="flex-1 bg-yellow-100 text-yellow-700 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(project.id)} className="flex-1 bg-red-100 text-red-700 py-1 rounded">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;