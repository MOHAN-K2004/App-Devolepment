import React from 'react'
import './Signup.css'
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
    const handleSignUp =()=>{
        toast.success("Signup successfull")
    }
  return (
    <div className='Signup-page'>
        <Toaster/>
    <div className='Signup-page-box'>
        <div className='Signup-page-box-left'>
             <h1>Welcome Back!</h1>
             <h7>To keep connected with us please</h7>
             <h8>login with your personal info</h8>
             <button onClick={()=>navigate('/')}>Sign In</button>
        </div>
        <div className='Signup-page-box-middle '>
            {/* <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1694709316/undraw_Access_account_re_8spm-removebg-preview_kb9m5g.png" alt="" /> */}
        </div>
        <div className='Signup-page-box-right'>
            <h1>Create an account</h1>
            <input type='text'placeholder='Name'></input>
            <input type='text'placeholder='Email'></input>
            <input type='password'placeholder='Password'></input>
        </div>
        <div className='Signup-page-box-right-icons'>
              <AccountCircleOutlinedIcon  fontSize='large' className='Signup-page-box-right-icon1'/>
              <MailOutlineOutlinedIcon fontSize='large' className='Signup-page-box-right-icon2'/>
              <HttpsOutlinedIcon fontSize='large' className='Signup-page-box-right-icon3'/>
        </div>
        <div className='Signup-page-box-right-button'>

        <Button color='success' variant="contained" onClick={handleSignUp}>Signup</Button>
        </div>
        <div className='Signup-page-box-right-bottom'>
            
            <h8>-----------Continue with-----------</h8>
            <div className='Signup-page-box-right-bottom-icons'>
            <FacebookIcon className='Signup-page-box-right-bottom-icon1'/>
            <GoogleIcon className='Signup-page-box-right-bottom-icon2'/>
            <InstagramIcon className='Signup-page-box-right-bottom-icon3'/></div>
        </div>
    </div>
</div>
  )
}

export default Signup