import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHammer, FaProjectDiagram, FaUsers, FaEnvelope, FaSignOutAlt, FaPlus, FaTrash } from 'react-icons/fa';

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('inbox');
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState({ services: 3, projects: 3, team: 3 });
  
  // Simulation Data (In real app, fetch from Backend)
  const [content, setContent] = useState({
    services: [
      { id: 1, title: "Structure Works" },
      { id: 2, title: "Turnkey Projects" },
    ],
    projects: [
      { id: 1, title: "Pratham Heights" },
      { id: 2, title: "Westside Complex" },
    ]
  });

  // Load Messages from "Database" (LocalStorage)
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    setMessages(savedMessages);
  }, []);

  const handleDeleteMessage = (index) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    localStorage.setItem('contactMessages', JSON.stringify(updated));
  };

  const handleAddItem = (type) => {
    const name = prompt(`Enter new ${type} name:`);
    if (name) {
      const newItem = { id: Date.now(), title: name };
      setContent(prev => ({ ...prev, [type]: [...prev[type], newItem] }));
    }
  };

  const handleDeleteItem = (type, id) => {
    if(window.confirm("Delete this item?")) {
      setContent(prev => ({ ...prev, [type]: prev[type].filter(i => i.id !== id) }));
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-jr-blue text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-800">
          Admin<span className="text-jr-orange">Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('inbox')} className={`w-full flex items-center gap-3 p-3 rounded transition ${activeTab === 'inbox' ? 'bg-jr-orange' : 'hover:bg-blue-800'}`}>
            <FaEnvelope /> Inbox 
            {messages.length > 0 && <span className="bg-red-500 text-xs px-2 py-1 rounded-full">{messages.length}</span>}
          </button>
          <button onClick={() => setActiveTab('services')} className={`w-full flex items-center gap-3 p-3 rounded transition ${activeTab === 'services' ? 'bg-jr-orange' : 'hover:bg-blue-800'}`}>
            <FaHammer /> Services
          </button>
          <button onClick={() => setActiveTab('projects')} className={`w-full flex items-center gap-3 p-3 rounded transition ${activeTab === 'projects' ? 'bg-jr-orange' : 'hover:bg-blue-800'}`}>
            <FaProjectDiagram /> Projects
          </button>
        </nav>
        <button onClick={onLogout} className="p-4 bg-red-600 hover:bg-red-700 flex items-center justify-center gap-2">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">{activeTab} Management</h1>

        {/* INBOX TAB */}
        {activeTab === 'inbox' && (
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-gray-500">No new messages from users.</div>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-jr-orange flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{msg.name}</h3>
                    <p className="text-sm text-gray-500">{msg.email}</p>
                    <p className="mt-2 text-gray-700 bg-gray-50 p-3 rounded">{msg.message}</p>
                    <p className="text-xs text-gray-400 mt-2">{msg.date}</p>
                  </div>
                  <button onClick={() => handleDeleteMessage(idx)} className="text-red-500 hover:text-red-700"><FaTrash /></button>
                </div>
              ))
            )}
          </div>
        )}

        {/* SERVICES / PROJECTS TABS (CRUD Simulation) */}
        {['services', 'projects'].includes(activeTab) && (
          <div>
            <div className="flex justify-end mb-6">
              <button onClick={() => handleAddItem(activeTab)} className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 flex items-center gap-2">
                <FaPlus /> Add New {activeTab.slice(0, -1)}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content[activeTab].map((item) => (
                <div key={item.id} className="bg-white p-6 rounded shadow flex justify-between items-center">
                  <span className="font-bold text-lg">{item.title}</span>
                  <div className="flex gap-2">
                    <button className="text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-50">Edit</button>
                    <button onClick={() => handleDeleteItem(activeTab, item.id)} className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}