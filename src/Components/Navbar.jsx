// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='flex flex-row justify-between bg-purple-300 p-5'>
      <div className='flex-row flex items-center'>
        <img className='h-10 w-10 rounded-full' src="../src/assets/dental.png" alt="Dental Clinic Logo" />
        <p className='ms-5'>Dental Clinic</p>
      </div>

      <div className='flex flex-row items-center'>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/about"}>
          <p className='ms-5'>About</p>
        </Link>
        <Link to={"/login"}>
          <p className='ms-5'>Login</p>
        </Link>
        <Link to={"/register"}>
          <p className='ms-5'>Register</p>
        </Link>
        <img className='h-5 w-5 rounded-full' src="../src/assets/login logo.png" alt="Dental Clinic Logo" />
        <Link to={"/news"}>
          <p className='ms-5'>News</p>
        </Link>
        <Link to={"/dashboard"}>
          <p className='ms-5'>dashboard</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
