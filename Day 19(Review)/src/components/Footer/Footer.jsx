import React from "react";
import "./Footer.css";
import deputywhite from "../../assets/img/deputywhite.svg";
import applestore from "../../assets/img/applestore.svg";
import googleplay from "../../assets/img/googleplay.svg";
import facbookicon from "../../assets/img/facebookicon.svg";
import twittericon from "../../assets/img//twittericon.svg";
import instagramicon from "../../assets/img/instagramicon.svg";
import linkedinicon from "../../assets/img/linkedinicon.svg";
import { PiPhoneCallLight } from "react-icons/pi";
import { GoGlobe } from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const gotoPrivacypage = () => {
    navigate("/privacy");
  };
  const gototermsandconditions = () => {
    navigate("/termsandconditions");
  };
  const gotofaq = () => {
    navigate("/faq");
  };
  const gotoaboutuspage = () => {
    navigate("/aboutus");
  };
  const gotoconntactuspage = () => {
    navigate("/contactuspage");
  };
  return (
    <>
      <div className="ClientHome-container6">
        <div className="ClientHome-container6-one">
          <img src={deputywhite} alt="" />
          <img src={googleplay} alt="" />
          <img src={applestore} alt="" />
        </div>
        <div className="ClientHome-container6-two">
          <div className="ClientHome-container6-two-top">
            <p>COMPANY</p>
            <h6>About us</h6>
            <h6>
              careers{" "}
              <button className="ClientHome-container6-two-top-button">
                Join us
              </button>
            </h6>
            <h6>Partners</h6>
            <h6>Press</h6>
            <h6>why deputy</h6>
            <h6>workspace Management</h6>
          </div>
          <div className="ClientHome-container6-two-bottom">
            <p>PRODUCT</p>
            <h6>Pricing</h6>
            <h6>Product tour</h6>
            <h6>See What's new</h6>
          </div>
        </div>
        <div className="ClientHome-container6-three">
          <p>SUPPORT</p>
          <h6>Deputy training</h6>
          <h6>Deputy API</h6>
          <h6>GDPR</h6>
          <h6>Help Center</h6>
          <h6>Security status</h6>
          <h6>Trust center</h6>
        </div>
        <div className="ClientHome-container6-four">
          <p>FEATURES</p>
          <h6>Auto scheduling</h6>
          <h6>Demand forcasting</h6>
          <h6>Employee Management</h6>
          <h6>Mobile App</h6>
          <h6>Shift Planning</h6>
          <h6>Shift swapping</h6>
          <h6>Time trackin</h6>
          <h6>Task Management</h6>
          <h6>Time Clock App</h6>
          <h6>Workspace communication</h6>
        </div>
        <div className="ClientHome-container6-five">
          <div className="ClientHome-container6-five-top">
            <p>INDUSTRY SAVED</p>
            <h6>All industries</h6>
            <h6>Agriculture</h6>
            <h6>Employee Management</h6>
            <h6>Charity</h6>
            <h6>Healthcare</h6>
            <h6>Entertainment</h6>
            <h6>Healthcare</h6>
            <h6>Retail</h6>
            <h6>Security</h6>
            <h6>Supermarkets</h6>
          </div>
          <div className="ClientHome-container6-five-bottom">
            <p>BUSINESS SIZE</p>
            <h6>Enterprise</h6>
            <h6>Small or Medium-size</h6>
          </div>
        </div>
        <div className="ClientHome-container6-six">
          <div className="ClientHome-container6-six-top">
            <p>RESOURCES</p>
            <h6>Blog</h6>
            <h6>Customer stories</h6>
            <h6>Customer Reviews</h6>
            <h6>Glossary</h6>
            <h6>Newsroom</h6>
            <h6>Refer a friend</h6>
            <h6>Webinars</h6>
          </div>
          <div className="ClientHome-container6-six-bottom">
            <p>CONTACT US</p>
            <h5>
              <PiPhoneCallLight className="ClientHome-container6-six-bottom-mobileicon" />
              8524892424
            </h5>
            <h5>727821tucs129@skct.edu.in</h5>
            <h6>Deputy USA </h6>
            <h6>211,C-block,Boys Hostel,Skct</h6>
            <h6>Coimbatore 641-042</h6>
            <div className="ClientHome-container6-six-bottom-media-icons">
              {/* eslint-disable-next-line */}
              <a target="_blank" href="https://www.facebook.com" rel="noopener">
                <img src={facbookicon} alt="" />
              </a>
              {/* eslint-disable-next-line */}
              <a target="_blank" href="https://twitter.com/" rel="twitter">
                <img src={twittericon} alt="" />
              </a>
              {/* eslint-disable-next-line */}
              <a
                target="_blank"
                href="https://www.instagram.com"
                rel="instagram"
              >
                <img src={instagramicon} alt="" />
              </a>
              {/* eslint-disable-next-line */}
              <a target="_blank" href="http://www.linkedin.com" rel="linkedin">
                <img src={linkedinicon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="ClientHome-container7">
        <div className="ClientHome-container7-left">
          <h6 onClick={gotoaboutuspage} style={{cursor:"pointer"}}>
            {" "}
            <GoGlobe />
            USA/GLOBAL
            <AiFillCaretDown />
          </h6>
          <h6 style={{ cursor: "pointer" }} onClick={gotoPrivacypage}>
            Legal/Privacy
          </h6>
          <h6 style={{ cursor: "pointer" }} onClick={gototermsandconditions}>
            Terms and Conditions
          </h6>
          <h6 style={{ cursor: "pointer" }} onClick={gotofaq}>
            FAQ
          </h6>
          <h6 style={{ cursor: "pointer" }} onClick={gotoconntactuspage}>
            Contact Us
          </h6>

        </div>
        <div className="ClientHome-container7-right">
          © 2023 Deputy. All Rights Reserved. "Deputy" and "Spark Device" are
          trade marks of Deputechnologies Pty Ltd.
        </div>
      </div>
    </>
  );
};

export default Footer;
