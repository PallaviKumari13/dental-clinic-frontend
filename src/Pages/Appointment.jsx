import React, { useState } from "react";
import axios from "axios";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/dental-clinic/slot/", formData);
      setMessage(response.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
      });
    } catch (error) {
      setMessage("Failed to make an appointment. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center self-center h-full items-center'
    style={{
      backgroundImage: 'url("../src/assets/border2.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
       <div className="container mx-auto">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="bg-green shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="patientName" className="block text-gray-700 text-sm font-bold mb-2">Patient Name</label>
            <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Patient Name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
            <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Age" required />
          </div>
          <div className="mb-4">
            <label htmlFor="problem" className="block text-gray-700 text-sm font-bold mb-2">Problem</label>
            <textarea id="problem" name="problem" value={formData.problem} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" placeholder="Problem" required></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="doctorName" className="block text-gray-700 text-sm font-bold mb-2">Doctor Name</label>
            <select id="doctorName" name="doctorName" value={formData.doctorName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
              <option value="Dr. Kumar">Dr. Kumar</option>
              <option value="Dr. Park">Dr. Park</option>
              {/* Add other doctor options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Time</label>
            <input type="time" id="time" name="time" value={formData.date} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book Appointment</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}
    
export default AppointmentForm;
