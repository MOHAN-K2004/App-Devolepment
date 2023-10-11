import React from "react";
import "./ClientNavbar.css";
import logo from "../../assets/img/logo.svg";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const ClientNavbar = () => {
  const navigate = useNavigate();
  const gotologin = () => {
    navigate("/Login");
  };
  const gotohome = () => {
    navigate("/home");
  };
  const gotosignuppage = () => {
    navigate("/signup");
  };
  return (
    <div className="ClientNavbar">
      <div className="ClientNavbar-left">
        <img src={logo} alt="" />
        <p onClick={gotohome}>
          Vendor <AiOutlineCaretDown />
        </p>
        <p className="ClientNavbar-left-downarrow">
          Organization
          <AiOutlineCaretDown />
        </p>
        <p>Pricing</p>
        <p>Company</p>
        <p>Resources</p>
      </div>
      <div className="ClientNavbar-right">
        <p
          className="ClientNavbar-loginbutton"
          onClick={gotologin}
          style={{ cursor: "Pointer" }}
        >
          <BiUserCircle
            className="ClientNavbar-loginbutton-icon"
            fontSize={"large"}
          />{" "}
           Login
        </p>
        <p className="ClientNavbar-right-icon3" onClick={gotosignuppage} style={{cursor:"pointer"}}> Start my Free trial</p>
      </div>
    </div>
  );
};

export default ClientNavbar;
