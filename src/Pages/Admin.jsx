import React from 'react';
import Doctors from './Doctors';

function AdminDashboard() {
  return (
    <div className='flex justify-center self-center h-full items-center'
    style={{
      backgroundImage: 'url("../src/assets/border2.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="p-5">
          <h1 className="text-2xl font-bold">Admin</h1>
          <ul className="mt-6">
          <li>
              <a href="/Dashboard" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/Appointment" className="block py-2 px-4 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Appointment
              </a>
            </li>
            <li>
            <a href="/PatientDetails" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                PatientDetails
              </a>
            </li> 
            <li>
              <a href="/Doctors" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Doctors
              </a>
            </li>
            <li>
            <a href="/StaffList" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                StaffList
              </a>         
           </li>
           <li>
            <a href="/PaymentDetails" className="block py-2 px-4 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                PaymentDetails
              </a>
            </li> 
            <li>
            <a href="/logout" className="block py-2 px-3 text-green-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Logout
              </a>         
           </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-10">
        {/* Render Doctors component here */}
        <Doctors />
      </div>
    </div>
    </div>
  );
}

export default AdminDashboard;
