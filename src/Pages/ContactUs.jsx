// ContactUs.js

import React from 'react';

function ContactUs() {
  return (
    <div className="bg-purple-200 bg-cover" style={{ backgroundImage: 'url("../src/assets/bgi3.avif")' }}>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2">Location</h2>
            <p>Dental Clinic</p>
            <p>Mithapur</p>
            <p>Patna</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Contact Information</h2>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@dentalclinic.com</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 border rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-2 border rounded-md w-full"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
