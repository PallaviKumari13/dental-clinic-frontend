import React, { useState, useEffect } from 'react';

function StaffList() {
  // State to store staff data
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    // Simulated staff data
    const mockStaffData = [
      { id: 1, name: 'Kim', position: 'Dentist' },
      { id: 2, name: 'Rima', position: 'Hygienist' },
      { id: 3, name: 'Nick', position: 'Assistant' },
      
    ];

    // Set staff data to state
    setStaffList(mockStaffData);
  }, []);

  return (
    <div className='flex justify-center self-center h-full items-center'
    style={{
      backgroundImage: 'url("../src/assets/new.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
    <div>
      <h2 className="text-3xl font-bold mb-4">Staff List</h2>
      <ul className="divide-y divide-gray-200">
        {/* Map through staffList and render each staff member */}
        {staffList.map((staff) => (
          <li key={staff.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                
                <img className="h-10 w-10 bg-green-300 rounded-full" src={`https://via.placeholder.com/40?text=${staff.name[0]}`} alt={staff.name} />
              </div>
              <div>
                {/* Staff name */}
                <p className="text-lg font-semibold">{staff.name}</p>
                {/* Staff position */}
                <p className="text-green-900">{staff.position}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default StaffList;
