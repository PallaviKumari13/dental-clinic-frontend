import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    email: '',
    password: ''
  });

  const { name, phoneNo, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation and submit data to the server
    console.log(formData); // For demonstration, logging form data
    // Assuming successful registration, you can show a success message
    alert('Registration successful!');
    // Optionally, reset the form
    setFormData({
      name: '',
      phoneNo: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className='flex justify-center self-center h-full items-center'
      style={{
        backgroundImage: 'url("../src/assets/border2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className='flex justify-center self-center  h-full items-center  '>
        <div className="p-6 ">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <div className="mb-4">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label className="block text-black-900 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                required
                type="text"
                className="bg-purple-200 text-purple-900 rounded-md m-2"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <label className="block text-black-900 text-sm font-bold mb-2">
                Phone no:
              </label>
              <input
                required
                type="tel"
                className="bg-purple-200 text-purple-900 rounded-md m-2"
                placeholder="Enter your number"
                name="phoneNo"
                value={phoneNo}
                onChange={handleChange}
              />
              <label className="block text-black-900 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                required
                type="email"
                className="bg-purple-200 text-purple-900 rounded-md m-2"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <label className="block text-black-900 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                required
                type="password"
                className="bg-purple-200 text-purple-900 rounded-md m-2"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                SUBMIT
              </button>
              <p className="text-sm mt-2">
                Already have an account? <Link to="/login" className="text-green-900">Login here</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
