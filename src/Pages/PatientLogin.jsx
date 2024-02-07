import React, { useState } from 'react';

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

  const navigateToRegister = () => {
    // Implement navigation logic to the register page
  };

  return (
    <div className='flex justify-center self-center h-full items-center'
    style={{
      backgroundImage: 'url("../src/assets/bgggg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className='p-8 shadow-md rounded-md'>
        <h2 className='text-2xl font-bold mb-4 '>Login</h2>
        <div className='mb-4'>
          <form onSubmit={handleRegister} className='flex flex-col'>
            <input
              required
              type='text'
              className='bg-purple-200 text-purple-900 rounded-md m-2'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              Don't have an account?{' '}
              <span onClick={navigateToRegister}>Register</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
