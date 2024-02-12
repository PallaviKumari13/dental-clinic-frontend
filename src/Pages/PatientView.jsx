import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        patientName: '',
        gender: 'Male', // Default gender
        age: '',
        problem: '',
        doctorName: 'Dr.Kumar', // Default doctor
        date: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Your submit logic here
    };

    return (
        <div className="container">
            <div className="content" style={{ minHeight: '440px', backgroundColor: '#FFFFFF', border: 'none' }}>
                <div className="form-group">
                    <div className="row">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Patient Name</td>
                                    <td><input type="text" name="patientName" value={formData.patientName} onChange={handleChange} className="form-control" maxLength="150" /></td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>
                                        <select name="gender" value={formData.gender} onChange={handleChange} className="form-control">
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td><input type="text" name="age" value={formData.age} onChange={handleChange} className="form-control" maxLength="3" /></td>
                                </tr>
                                <tr>
                                    <td>Problem</td>
                                    <td><input type="text" name="problem" value={formData.problem} onChange={handleChange} className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td>Upload Report</td>
                                    <td><input type="file" name="uploadReport" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td>Doctor Name</td>
                                    <td>
                                        <select name="doctorName" value={formData.doctorName} onChange={handleChange} className="form-control">
                                            <option value="Dr. Kumar">Dr.kumar</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td><input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2" align="center"><button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><span className="text-danger" id="lblMsg"></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentForm;
