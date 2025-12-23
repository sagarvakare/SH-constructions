import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: '', description: '', iconUrl: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get('https://jr-constructions-clone.onrender.com/api/services');
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services", error);
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm("Delete this service?")) return;
    try {
      await axios.delete(`https://jr-constructions-clone.onrender.com/api/services/${id}`, getAuthHeader());
      fetchServices();
    } catch (error) {
      alert('Failed to delete service.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jr-constructions-clone.onrender.com/api/services', newService, getAuthHeader());
      alert('Service Added!');
      setNewService({ title: '', description: '', iconUrl: '' });
      fetchServices();
    } catch (error) {
      alert('Failed to add service.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Services</h1>
        <Link to="/admin/dashboard" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          ← Back to Dashboard
        </Link>
      </div>

      {/* --- ADD SERVICE FORM --- */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-l-4 border-green-600">
        <h2 className="text-xl font-bold mb-4">Add New Service</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Service Title" value={newService.title} onChange={e => setNewService({...newService, title: e.target.value})} required />
          <input className="border p-2 rounded" placeholder="Icon URL (e.g. from flaticon)" value={newService.iconUrl} onChange={e => setNewService({...newService, iconUrl: e.target.value})} />
          <textarea className="border p-2 rounded md:col-span-2" placeholder="Description" rows="2" value={newService.description} onChange={e => setNewService({...newService, description: e.target.value})} required />
          <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700 md:col-span-2">Add Service</button>
        </form>
      </div>

      {/* --- SERVICE LIST --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center relative group">
            <img src={service.iconUrl || "https://via.placeholder.com/50"} alt="icon" className="w-16 h-16 mb-4" />
            <h3 className="font-bold text-lg">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <button 
              onClick={() => handleDelete(service.id)} 
              className="mt-auto bg-red-100 text-red-700 px-4 py-1 rounded hover:bg-red-200"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;