import React, { useState } from 'react';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    function handleSubmit(e) {
      e.preventDefault();
      const body = {
        email,
        password
      };
  
      fetch('http://localhost:3000/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then((response) => {
          if (response.status === 200) {
            response.json().then((json) => {
              localStorage.setItem('userToken', json.token);
              alert(' Success');
              navigateToDashboard('/dashboard');
            });
          } else {
            response.json().then((json) => alert(json.message));
          }
        })
        .catch((error) => alert(error));
    }
  
    const navigateToRegister = () => {
      // Implement navigation logic to the register page
    };
  

    return (
      <div className="bg-green-200 bg-cover" style={{ backgroundImage: 'url("../src/assets/border2.jpg")' }}>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-2">Location</h2>
              <p>Dental Clinic</p>
              <p>Patna,</p>
              <p>Bihar</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Contact Information</h2>
              <p>Phone: +91-8998226712 </p>
              <p>Email:  support@hopedental.com </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-2">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 border rounded-md " />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="2" className="mt-1 p-2 border rounded-md w-full"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-blue-600">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactUs;
