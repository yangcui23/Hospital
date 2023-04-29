import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import InputField from './components/Input';
import Main from './views/Main';
import Navbar from './views/Nav';
import NotFound from './views/notfound';
import About from './views/About';
import Bottom from './views/Bottom';
import Login from './components/Login';
import Appointment from './components/Appointment';
import Contact from './views/Contact';
import Ada from './views/ADA';
import Disclaim from './views/disclaimer';
import Terms from './views/Terms';
import All from './views/All';
import Flu from './components/Flu';
import List from './views/List';
import FluAppointment from './views/FluAppointments';


const App=()=> {
  return (
    <div className="pt-1">

      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<InputField/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/about-centura' element={<About/>}/>
        <Route path='/centura-login' element={<Login/>}/>
        <Route path='/appointments' element={<All/>}/>
        <Route path='/schedule' element={<Appointment/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/ada-compliance' element={<Ada/>}/>
        <Route path='/disclaimer' element={<Disclaim/>}/>
        <Route path='/privacy-and-policy' element={<Terms/>}/>
        <Route path='/flu-appointment' element={<Flu/>}/>
        <Route path='/flu' element={<FluAppointment/>}/>



      </Routes>
      <Bottom/>
    </div>
  );
}

export default App;
