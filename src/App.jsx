import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register'; 
import dashboard from './Pages/dashboard';
import Home from './Pages/Home';
import News from './Pages/News';
import Contact from './Pages/Contact'; 
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn,setisLoggedin] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem("userToken")
    if(token){
      setisLoggedin(true)
    }
  },[])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        {loggedIn &&<Route path='/dashboard' element={<dashboard/>}/>}
      </Routes>

      <p>Hi Park</p>
      <p>How are you??</p>
    </>
  );
}

export default App;
