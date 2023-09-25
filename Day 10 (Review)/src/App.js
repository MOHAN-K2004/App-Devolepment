
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
import Privacypage from './components/Privacypage/Privacypage';
import Termsandconditions from './components/Termsandconditions/Termsandconditions';
import ClientHome from './components/ClientHome/ClientHome';
import ScrollToTop from './Services/ScrollToTop';
import Faq from './components/Faq/Faq';
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/ContactUs/Contactus';
import AddVendor from './components/Vendor/AddVendor';
import ViewVendor from './components/Vendor/ViewVendor';




function App() {
  return (
    <>
     <ScrollToTop/>
    <Routes>
      <Route path='/contactuspage' element={<Contactus/>}/>
       <Route path='/faq' element={<Faq/>}/>
      <Route path='/' element={<ClientHome/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/privacy' element={<Privacypage/>}/>
      <Route path='/termsandconditions' element={<Termsandconditions/>}/>
     
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contracts' element={<Contracts/>}/>
      <Route path='/complients' element={<Complients/>}/>
      <Route path='/organization' element={<Organization/>}/>
      <Route path='/vendors' element={<Vendors/>}/>
      <Route path='/addVendor' element={<AddVendor/>}/>
      <Route path='/viewVendors' element={<ViewVendor/>}/>
    </Routes>
    </>
  );
}

export default App;
