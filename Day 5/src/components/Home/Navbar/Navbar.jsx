import React from "react";
import "./Navbar.css";
// import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/UserSlice";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import NotificationsOffOutlinedIcon from "@mui/icons-material/NotificationsOffOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
const Navbar = () => {
  const user = useSelector(selectUser);
  return (
    <div className="Navbar">
      <h1>Delta EnterPrise</h1>
      <img src="https://clipground.com/images/logos-png-8.png" alt="" />
      <div className="Navbar-search-box ">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <NotificationsOffOutlinedIcon
        className="navbar-notificationicon"
        fontSize="large"
      />
      <SettingsIcon className="navbar-settingsicon" fontSize="large" />
      <div className="Navbar-loginid">
        <AccountBoxOutlinedIcon
          className="navbar-profileicon"
          fontSize="large"
        />
        {user ? user.email : "user"}
      </div>
    </div>
  );
};

export default Navbar;
