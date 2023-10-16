import React, { useState } from "react";
import "./Login.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login1 } from "../Redux/UserSlice";
import Authservice from "../../Services/Authservice";
// import logo from "../../assets/img/logo.svg";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  // eslint-disable-next-line
  const [loginerror, setLoginerror] = useState("");
  const Validate = () => {
    setLoginerror({});
    let error = {};
    if (login.email.trim() === "") {
      error.email = true;
      toast.error("Enter Email");
    }
    if (login.password.trim() === "") {
      error.password = true;
      toast.error("Enter Password");
    } else if (login.password.length < 6 || login.password.length > 15) {
      toast.error("Password length must be 6 to 15");
      error.password = true;
    }
    setLoginerror(error);
    console.log(error);
    return error;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  //   const handleLogin =()=>{
  //     toast.success("Login successfull")
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = Validate();
    if (!error.email && !error.password) {
      
      await Authservice.Login(login)
        .then((response) => {
          console.log(response);
          if (response.data.role === "ADMIN") {
            dispatch(
              login1({
                email: response.data.email,
                name: response.data.name,
              })
            );
            navigate('/home')
          }
        })
        .catch((error) => {});
    }
  };
  return (
    <div className="Login-page">
      <Toaster />

      <div className="Login-page-box">
        <div className="Login-page-box-left">
          <img
            src="https://res.cloudinary.com/doz5njr9h/image/upload/v1694694476/undraw_Thought_process_re_om58_buhewy.png"
            alt="img1"
          />
          <div className="login-page-box-left-textline1">
            <h8>Login in to get in the moment updates on the</h8>
            <h7>things that interest you.</h7>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="Login-page-box-right">
          <div className="Login-page-right-top">
            <h1>Login</h1>
            <h2>Hello there!</h2>
            <h3>Welcome Back</h3>
          </div>
          <div className="login-page-box-right-middle">
            <MailOutlineIcon
              fontSize="large"
              className="login-page-box-right-middle-icon1"
            />
            <input
              placeholder="Email"
              type="email"
              className="login-page-email-box"
              id="email"
              onChange={handleChange}
              value={login.email}
              name="email"
              required={true}
            ></input>
            <LockOutlinedIcon
              fontSize="large"
              className="login-page-box-right-miccle-icon2"
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={login.password}
              className="login-page-pass-box"
            ></input>
          </div>
          <div className="login-page-box-right-bottom">
            <div className="login-page-box-right-bottom-checkbox">
              <input type="checkbox"></input>
              Remember Me
            </div>
            <div className="login-page-box-right-bottom-forgot">
              <h6>Forget password?</h6>
            </div>
            <div className="login-page-loginbutton">
              <Button
                variant="contained"
                color="success"
                type="submit"
                onClick={handleSubmit}
              >
                lOGIN
              </Button>
            </div>
            <div className="login-page-signup">
              <h9>Don't have an account?</h9>
              <h10 onClick={() => navigate("/signup")}>
                <u>Signup</u>
              </h10>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;