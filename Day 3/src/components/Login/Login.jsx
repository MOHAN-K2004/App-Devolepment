import React from 'react'
import './Login.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  return (
  <div className='Login-page'>
      <div className='Login-page-box'>
        <div className='Login-page-box-left'>
          <img src='https://res.cloudinary.com/doz5njr9h/image/upload/v1694694476/undraw_Thought_process_re_om58_buhewy.png' alt='img1'/>
          <div className='login-page-box-left-textline1'>
            <h8>Login in to get in the moment updates on the</h8>
            <h7>things that interest you.</h7>
          </div>
        </div>
        <div className='Login-page-box-right'>
               <div className='Login-page-right-top'>
                      <h1>Login</h1>
                      <h2>Hello there!</h2>
                      <h3>Welcome Back</h3>
               </div>
               <div className='login-page-box-right-middle'>
                     <MailOutlineIcon fontSize='large' className='login-page-box-right-middle-icon1'/>
                      <input placeholder='Email'  type='text' className='login-page-email-box'></input>
                      <LockOutlinedIcon fontSize='large' className='login-page-box-right-miccle-icon2'/>
                      <input placeholder='Password'type='password' className='login-page-pass-box'></input>
               </div>
               <div className='login-page-box-right-bottom'>
                <div className='login-page-box-right-bottom-checkbox'>
                  
                    <input type='checkbox'></input>
                    Remember Me
                </div>
                <div className='login-page-box-right-bottom-forgot'>
                               <h6>Forget password?</h6>
                </div>
                <div className='login-page-loginbutton'>  
                 <Button variant="contained" color="success">
                  lOGIN
                  </Button>
                  </div>
                  <div className='login-page-signup'>
                    <h9>Don't have an account?</h9>
                    <h10 onClick={()=>navigate('/signup')}><u>Signup</u></h10>
       
                  </div>
               </div>
        </div>
      </div>
  </div>
  )
}

export default Login