import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const body= {
      name,PhoneNo,email,password
    }
    fetch("http://localhost:3000/Register", {
method: "POST",
headers: {

"Content-Type": "application/json"

},

body: JSON.stringify(body)

}).then(response => {

if (response.status === 201) {

return response.json()

} else {
  alert(" Response Was Not Successfull ")

alert(response.body.message)

throw new Error(response)

}

}).then(json=> alert(json.message))
.catch(error=> alert(error))
  }
  const backgroundStyle = {
    backgroundImage: 'url("../src/assets/bgggg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
      <form onSubmit={handleRegister} action=''className='flex flex-col'></form>
      <div className=" p-8 shadow-full rounded-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-black-700 text-sm font-bold mb-2 " placeholder='Enter your name' htmlFor="name">
            Name:
          </label>
          <input
            className="w-full p-2 border rounded-md"
             required type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            const handlenameChange  onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black-700 text-sm font-bold mb-2" placeholder='Enter your Number' htmlFor="phoneNo">
            PhoneNo:
          </label>
          <input
            className="w-full p-2 border rounded-md"
           required type="text"
            id="phoneNo"
            placeholder="Enter your Number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black-700 text-sm font-bold mb-2" placeholder='Enter your Email' htmlFor="email">
            Email:
          </label>
          <input
            className="w-full p-2 border rounded-md"
           required type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black-700 text-sm font-bold mb-2" placeholder='Enter your password' htmlFor="password">
            Password:
          </label>
          <input
            className="w-full p-2 border rounded-md"
             required type="password"
            id="password"
            placeholder="Enter your password"
            requiredvalue={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-purple-800 text-white p-2 rounded-md" onClick={handleRegister}>
          Register
        </button>
        <p className="mt-6">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        
      </div>
    </div>
  );
};

export default Register;
