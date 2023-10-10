import React from "react";
import Navbar from "./Navbar/Navbar";
import Leftbar from "./Lefftbar/Leftbar";
import "./AdminDashboard.css";

import { BiMenu } from "react-icons/bi";

const AdminDashboard = () => {
  return (
    <div className="Home-static-titles">
      <Navbar />
      <div className="Home-admindashboard-page">
        <Leftbar />
        <div className="HomePage-AdminDashboard-Contents">
          <img
            src="https://gobonfire.com/wp-content/uploads/Image_Blog_Vendor-Disqualifications_Image1.png"
            alt=""
          ></img>
          <h1>Dashboard</h1>
          <div className="Homepage-Dashboard-contentbox1">
            <h4>Signup in Last 7 days</h4>
            <h7>2,130</h7>
            <BiMenu className="Homepage-Dashboard-contentbox-icon" />
          </div>
          <div className="Homepage-Dashboard-contentbox2">
            <h5>Revenue in Last 7 days</h5>
            <h7>$4,250</h7>
            <BiMenu className="Homepage-Dashboard-contentbox-icon" />
          </div>
          <div className="Homepage-Dashboard-contentbox3">
            <h6>Visitors in Last 7 days</h6>
            <h7>4,210</h7>
            <BiMenu className="Homepage-Dashboard-contentbox-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
