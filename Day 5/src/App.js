
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Organization from './components/Home/Organization';
import Vendors from './components/Home/Vendors';
import Contracts from './components/Home/Contracts';
import Complients from './components/Home/Complients';
import AdminDashboard from './components/Home/AdminDashboard';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contracts' element={<Contracts/>}/>
      <Route path='/complients' element={<Complients/>}/>
      <Route path='/organization' element={<Organization/>}/>
      <Route path='/vendors' element={<Vendors/>}/>
    </Routes>
   
  );
}

export default App;
