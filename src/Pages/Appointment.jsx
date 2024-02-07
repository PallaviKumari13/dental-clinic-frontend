import React from 'react';
import backgroundImg from '../assets/bgi3.avif';

function AppointmentsCalendar() {
  // You can fetch appointment data here from an API or local storage
  const appointments = [
    { id: 1, patientId: 1, dateTime: '2024-02-06 10:00 AM' },
    { id: 2, patientId: 2, dateTime: '2024-02-07 2:00 PM' },
    { id: 3, patientId: 3, dateTime: '2024-02-07 2:00 PM' },
    // Add more appointment data as needed
  ];

  return (
    <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${backgroundImg})` }}>
      {appointments.map(appointment => (
        <div key={appointment.id} className="border p-4 mb-4 bg-white bg-opacity-50">
          <h3 className="text-lg font-bold">Appointment</h3>
          <p>Patient ID: {appointment.patientId}</p>
          <p>Date & Time: {appointment.dateTime}</p>
        </div>
      ))}
    </div>
  );
}

export default AppointmentsCalendar;
