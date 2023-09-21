import React,{useState} from "react";
import "./Signup.css";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [Signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
    // eslint-disable-next-line
  const [Signuperror, setSignuperror] = useState("");
  const Validate = () => {
    setSignuperror({});
    let error = {};
    if (Signup.name.trim() === "") {
      error.name = true;
      toast.error("Enter a Name");
    }
    if (Signup.email.trim() === "") {
      error.email = true;
      toast.error("Enter Email");
    }
    if (Signup.password.trim() === "") {
      error.password = true;
      toast.error("Enter Password");
    } else if (Signup.password.length < 6 || Signup.password.lenght > 15) {
      toast.error("password length is must be 6");
      error.password = true;
    }
    setSignuperror(error);
    console.log(error);
    return error;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...Signup, [name]: value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    const error = Validate();
    if (!error.name && !error.email && !error.password)
     {
         toast.success("Signup Done")
         setTimeout(()=>{

             navigate("/home")
         },1000)
    };
  };
  return (
    <div className="Signup-page">
      <Toaster />
      <div className="Signup-page-box">
        <div className="Signup-page-box-left">
          <h1>Welcome Back!</h1>
          <h7>To keep connected with us please</h7>
          <h8>login with your personal info</h8>
          <button onClick={() => navigate("/")}>Sign In</button>
        </div>
        <div className="Signup-page-box-middle ">
          {/* <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1694709316/undraw_Access_account_re_8spm-removebg-preview_kb9m5g.png" alt="" /> */}
        </div>
        <div className="Signup-page-box-right">
          <h1>Create an account</h1>
          <input type="name" placeholder="Name" className="Signup-page-name-box" id="name" onChange={handleChange} value={Signup.name} name="name" required={true}></input>
          <input type="text" placeholder="Email"className="Signup-page-email-box" id="email" onChange={handleChange} value={Signup.email} name="email" required={true}></input>
          <input type="password" placeholder="Password" className="Signup-page-password-box" id="password" onChange={handleChange} value={Signup.password} name="password"required={true}></input>
        </div>
        <div className="Signup-page-box-right-icons">
          <AccountCircleOutlinedIcon
            fontSize="large"
            className="Signup-page-box-right-icon1"
          />
          <MailOutlineOutlinedIcon
            fontSize="large"
            className="Signup-page-box-right-icon2"
          />
          <HttpsOutlinedIcon
            fontSize="large"
            className="Signup-page-box-right-icon3"
          />
        </div>
        <div className="Signup-page-box-right-button">
          <Button color="success" variant="contained" type='submit'onClick={handleSumbit}>
            Signup
          </Button>
        </div>
        <div className="Signup-page-box-right-bottom">
          <h8>-----------Continue with-----------</h8>
          <div className="Signup-page-box-right-bottom-icons">
            <FacebookIcon className="Signup-page-box-right-bottom-icon1" />
            <GoogleIcon className="Signup-page-box-right-bottom-icon2" />
            <InstagramIcon className="Signup-page-box-right-bottom-icon3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
