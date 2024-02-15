import React from 'react';

function Profile() {
  return (
    <div className='flex justify-center self-center h-full items-center'
    style={{
      backgroundImage: 'url("../src/assets/new.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
    <div className="max-w-md mx-80 mt-60 bg-green-200 shadow-md rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-40 w-full object-cover md:w-40" src="../src/assets/login.png" alt="Profile" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Name</div>
          <p className="text-gray-800">----</p>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">Email</div>
          <p className="text-gray-800">-----</p>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">Bio</div>
          <p className="text-gray-800">-----</p>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">Number</div>
          <p className="text-gray-800">-----</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
