import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      setStatus('Message sent! We will contact you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">Contact Us</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {status && (
            <div className={`p-4 mb-4 text-center rounded ${status.includes('sent') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input 
                type="text" 
                required
                className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea 
                rows="5"
                required
                className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;