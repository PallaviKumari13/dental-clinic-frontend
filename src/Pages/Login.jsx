import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  function handleRegister(e) {
    e.preventDefault();
    const body = {
      email,
      password
    };

    fetch('http://localhost:3000/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => {
        if (response.status === 200) {
          response.json().then((json) => {
            localStorage.setItem('userToken', json.token);
            alert('Login Success');
            navigateToDashboard('/dashboard');
          });
        } else {
          response.json().then((json) => alert(json.message));
        }
      })
      .catch((error) => alert(error));
  }



  return (
    <div className='flex justify-center self-center h-full items-center'
      style={{
        backgroundImage: 'url("../src/assets/border2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className='p-8 shadow-md'>
        <h2 className='text-2xl font-bold mb-4 text-gray-900 '>Login</h2>
        <div className='mb-4'>
          <form onSubmit={handleRegister} className='flex flex-col'>
            <label className="block text-black-900 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              required
              type='text'
              className='bg-purple-200 text-purple-900 rounded-md m-2'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block text-black text-sm font-bold mb-2">
              Password:
            </label>
            <input
              required
              type='password'
              className='bg-purple-200 text-purple-900 rounded-md m-2'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>SUBMIT</button>
            <p className="text-sm mt-2">
              Don't have an account? <Link to="/register" className="text-green-900">Register here</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
