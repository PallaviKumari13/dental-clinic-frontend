
import React, { useState, useEffect } from 'react';


const PatientDetails = () => {
    const [patients] = useState([]);

    function Details(e) {
      e.preventDefault();
      fetch("http://localhost:3000/Details", {
        method: "Get",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          if (response.status === 201) {
            return response.json();
          } else {
            alert("Successful store");
            throw new Error(response.statusText);
          }
        })
        .then(json => {
          alert(json.message);
          // Redirect to login page
        })
        .catch(error => alert(error));
    }
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Patient Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {patients.map(patient => (
                    <div key={patient._id} className="bg-white shadow-md rounded p-4">
                        <h2 className="text-lg font-semibold mb-2">{patient.name}</h2>
                        <p className="text-gray-600">Age: {patient.age}</p>
                        <p className="text-gray-600">Gender: {patient.gender}</p>
                        <p className="text-gray-600">Medical History: {patient.medicalHistory}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PatientDetails;
