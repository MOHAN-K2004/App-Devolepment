import React from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import PersonalVideoRoundedIcon from '@mui/icons-material/PersonalVideoRounded';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import './Leftbar.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/UserSlice';
const Leftbar = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const gotoDashboard=()=>{
      navigate("/admindashboard");
    }
    const gotoorganization=()=>{
      navigate("/organization");
    }
    const gotovendors=()=>{
      navigate("/vendors");
    }
    const gotoComplients=()=>{
      navigate("/complients");
    }
    const gotoContracts=()=>{
      navigate("/contracts");
    }
    const logoutHandler = () =>{
      dispatch(logout())
      navigate('/')
  }
  return (
    <div className='leftbarbox'>
      <div className='leftbarbox-conntents'>

        <button className='button1' onClick={gotoDashboard}><GridViewIcon/>Dashboard</button> 
        <button className='button1' onClick={gotoorganization}><ImportContactsIcon/>Organization</button> 
        <button className='button1' onClick={gotovendors}><WorkOutlineIcon/>Vendors</button> 
        <button className='button1' onClick={gotoContracts}><PersonalVideoRoundedIcon/>Contracts</button> 
        <button className='button1' onClick={gotoComplients}><MessageRoundedIcon/>Complients</button> 
      

      </div>
      <button className='leftbar-logout-button' onClick={logoutHandler}>Logout <KeyboardBackspaceIcon fontSize='medium' className='leftbar-logouticon'/></button>
    </div>
  )
}

export default Leftbar