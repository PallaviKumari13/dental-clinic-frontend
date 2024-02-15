import React, { useState } from 'react';

function Navbar() {
  return (
    <nav className="bg-green-700 border-gray-200 dark:bg-gray-900" style={{ backgroundImage: 'url("../src/assets/border.jpg")'}}>
      <div className="max-w-screen-xl flex flex-wrap bg-purple-00 items-center justify-between mx-auto p-4">
        <a href="https://example.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="../src/assets/dental.jpeg" className="w-10  rounded-full h-10" alt="park" />
          <span className="self-center text-2xl font-italic text-white whitespace-nowrap dark:text-white">Hope Dental Clinic</span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-green-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/home" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Home
              </a>
            </li>
            <li>
              <a href="/Aboutus" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                About Us
              </a>
            </li>
            <li>
              <a href="/Patientlogin" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Patient Login
              </a>
            </li>
            <li>
              <a href="/Services" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Services
              </a>
            </li>
            <li>
              <a href="/Contactus" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/Admin" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
