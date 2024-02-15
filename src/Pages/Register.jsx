import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    const body = { name, phoneNo, email, password };
    fetch("http://localhost:3000/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.status === 201) {
          return response.json();
        } else {
          alert("Response Was Not Successful");
          throw new Error(response.statusText);
        }
      })
      .then(json => {
        alert(json.message);
        // Redirect to login page
      })
      .catch(error => alert(error));
  }

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
            <form onSubmit={handleRegister} className="flex flex-col">
              <label className="block text-black-900 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                required
                type="text"
                className="bg-purple-200 text-purple-900 rounded-md m-2"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="block text-black-900 text-sm font-bold mb-2">
                Phone no:
              </label>
              <input
                required
                type="tel"
                className="bg-purple-200 text-purple-900 rounded-md m-2"
                placeholder="Enter your number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <label className="block text-black-900 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                required
                type="email"
                className="bg-purple-200 text-purple-900 rounded-md m-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="block text-black-900 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                required
                type="password"
                className="bg-purple-200 text-purple-900 rounded-md m-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
}
