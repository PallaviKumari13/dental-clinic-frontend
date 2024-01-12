import React, { useState } from'react';
import { Link } from 'react-router-dom';

export default function Login(){
  const backgroundStyle = {
    backgroundImage: 'url("../src/assets/bgggg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    function handleRegister(e){
        e.preventDefault();
        const body ={
            email,password
        }
        fetch("http://localhost:3000/Login",{
            method:"POST",
            headers:{
                "content-type":"appllication/json"
            },
            body: JSON.stringify(body)

          }).then(response => {
          
          if (response.status === 200) {
          
          response.json().then(json => {
          
          localStorage.setItem("userToken", json.token)
          alert("Login Success")
          NavigationPreloadManager("/dashboard")
          
          })
                alert ("Response Was Not Successfull")
                response.json().then (json=>alert(json.message))
            }
        })
        .catch(error=>alert(error))
    }
    return (
      <div className="min-h-screen flex items-center justify-center" style={backgroundStyle}>
        <div className='flex justify-center self-center h-[100hv] item-center'>
            <form onSubmit={handleRegister} action="" className='flex flex-col'>
            
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-black-700 text-sm font-bold mb-2" placeholder='Enter your password' htmlFor="password">
            Email:
          </label>
            <input
            className=" bg-purple-200 w-full p-2 border rounded-md"
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
            className="bg-purple-200 w-full p-2 border rounded-md"
           required type="password"
            id="password"
            placeholder="Enter your password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          
                <button  className="bg-purple-800 text-white p-2 rounded-md" >SUBMIT</button>
                <p className="mt-6">
          Don't have an account? <Link to="/Register">Register</Link>
        </p>
            </form>
          </div>
        
    </div>
        
    )
}