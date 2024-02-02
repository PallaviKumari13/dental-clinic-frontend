import React, { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    const body = {
      name,
      phoneNo,
      email,
      password
    };

    fetch('http://localhost:3000/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          alert('Response Was Not Successful');
          return response.json().then((json) => {
            throw new Error(json.message);
          });
        }
      })
      .then((json) => alert(json.message))
      .catch((error) => alert(error));
  }

  const navigateToLogin = () => {
    // Implement navigation logic to the login page
  };

  return (
    <div
    className='flex justify-center self-center h-full items-center'
    style={{
      backgroundImage: 'url("../src/assets/bgggg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className='p-6 shadow-md rounded-md'>
      <h2 className='text-2xl font-bold mb-4'>Register</h2>
      <div className='mb-4'>
        <form onSubmit={handleRegister} className='flex flex-col'>
            <label className='block text-black-900 text-sm font-bold mb-2' htmlFor='name'>
              Name:
            </label>
            <input
              required
              type='text'
              className='bg-purple-200 text-purple-900 rounded-md m-2'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className='block text-black-700 text-sm font-bold mb-2' htmlFor='phoneNo'>
              PhoneNo:
            </label>
            <input
              required
              type='tel'
              className='bg-purple-200 text-purple-900 rounded-md m-2'
              placeholder='Enter your number'
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />

            <label className='block text-black-700 text-sm font-bold mb-2' htmlFor='email'>
              Email:
            </label>
            <input
              required
              type='email'
              className='bg-purple-200 text-purple-900 rounded-md m-2'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className='block text-black-700 text-sm font-bold mb-2' htmlFor='password'>
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
            <p>
              Already have an Account?{' '}
              <span onClick={navigateToLogin}>Login</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
