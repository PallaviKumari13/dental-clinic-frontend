import React, { useState } from 'react';
import axios from 'axios';

const PaymentDetailsForm = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        amount: '',
        paymentMethod: '',
        notes: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/paymentdetails', formData);
            console.log(response.data);
            // Optionally, reset the form after successful submission
            setFormData({
                patientName: '',
                amount: '',
                paymentMethod: '',
                notes: ''
            });
        } catch (error) {
            console.error('Error submitting payment details:', error);
        }
    };

    return (
        
        <div className='flex justify-center self-center h-full items-center'
      style={{
        backgroundImage: 'url("../src/assets/border2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className='text-2xl font-semibold mb-14 text-gray-900 m-8'>

        <img src="../src/assets/23.jpg" className="w-10 h-10 rounded-full h-10" />
            <h2>Payment Details- </h2>
            <form onSubmit={handleSubmit}>
                <div className=' text-green-900 rounded-md mb-2'>
                <label className="block text-black-900 text-sm font-bold mb-2">
                Patient Name:
              </label>
              <input
                type="text"
                className="bg-green-200 text-green-900 rounded-md m-2"
                name="Patient Name"
                placeholder="Enter your name"
                value={formData.PatientName}
                onChange={handleChange}
                required
              />
                </div>
                <div className='text-green-900 rounded-md mb-2'>
                    <label className="block text-black-900 text-sm font-bold mb-2">Amount:</label>
                    <input
                        type="number"
                        className="bg-green-200 text-green-900 rounded-md m-2"
                        name="amount"
                        placeholder="Enter your amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className= 'text-green-900 rounded-md mb-6'>
                    <label  className="block text-black-900 text-sm font-bold mb-2">Payment Method:</label>
                    <input
                        type="text"
                        className="bg-green-200 text-green-900 rounded-md m-2"
                        name="paymentMethod"
                        placeholder="Enter your paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                    />
                    
                <img src="../src/assets/23.jpg" className="w-10 h-10 rounded-full h-10" />
                </div>
                <button type="submit" className="bg-green-900 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline">
                SUBMIT
              </button>
            </form>
        </div>
        </div>
    );
}

export default PaymentDetailsForm;
