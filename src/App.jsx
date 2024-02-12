import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Chat } from './Pages/Chat';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';  
import PatientLogin from './Pages/PatientLogin'; 
import Register from './Pages/Register';
import Dropdown from './Pages/Dropdown';
import Dashboard from './Pages/Dashboard';
import AppointmentsCalendar from './Pages/Appointment';
import ContactUs  from './Pages/ContactUs';
import EmployeeList from './Pages/EmployeeList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/patientlogin" element={<PatientLogin/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dropdown" element={<Dropdown/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/appointment" element={<AppointmentsCalendar/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/Employeelist" element={<EmployeeList/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
