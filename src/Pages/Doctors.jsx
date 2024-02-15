import React from 'react';

function Doctors() {
  // Dummy data for demonstration
  const doctors = [
    { id: 1, name: 'Dr. Kumar', specialty: 'Orthodontist', contact: '822-761-2899' },
    { id: 2, name: 'Dr. Park', specialty: 'Pediatric Dentist', contact: '987-654-3210' },
    // Add more doctors as needed
  ];

  return (
    <div className='bg-green-200'>
      <h2 className="text-3xl font-bold mb-6">Doctor Details</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {doctors.map(doctor => (
            <tr key={doctor.id}>
              <td className="px-6 py-4 whitespace-nowrap">{doctor.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{doctor.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{doctor.specialty}</td>
              <td className="px-6 py-4 whitespace-nowrap">{doctor.contact}</td>
              {/* Add more table cells for other details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Doctors;
