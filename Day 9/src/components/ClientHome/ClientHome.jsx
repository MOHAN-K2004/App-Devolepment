import React from "react";
import ClientNavbar from "../ClientNavbar/ClientNavbar";
import logo1 from "../../assets/img/logo1.svg";
import logo2 from "../../assets/img/logo2.svg";
import { BiMessageRounded } from "react-icons/bi";

import "./ClientHome.css";
import Typewriter from "typewriter-effect";
import Footer from "../Footer/Footer";

const ClientHome = () => {
  return (
    <>
      <ClientNavbar />
      <BiMessageRounded className="ClientHome-messageicon" />
      <div className="ClientHome">
        <div className="ClientHome-container1">
          <div className="ClientHome-container1-Left">
            <div className="Client-container1-Left-typewritter">
              <Typewriter
                options={{
                  strings: [
                    "Happier teams",
                    "Healthy Profits",
                    "Success stories",
                  ],
                  autoStart: true,
                  loop: true, // Enable looping
                }}
              />
            </div>
            <h1>start here</h1>
            <div className="ClientHome-container1-Left-text">
              {" "}
              Schedule staff with ease,control labor cost and simplify
              thimesheets,
            </div>
            <div className="ClientHome-container1-Left-icons">
              <h1>Try Deputy for free</h1>
              <h6>Talk to an expert</h6>
            </div>
            <div className="ClientHome-container1-Left-text1">
              <img src={logo2} alt="" /> Up to 31 days,no credit card requried
            </div>
          </div>
          <div className="ClientHome-container1-right">
            <img
              src="https://a.storyblok.com/f/64010/1250x818/06b665c4bd/deputy-hero-us-png.png"
              alt=""
            />
          </div>
        </div>
        <div className="ClientHome-container2">
          {" "}
          <img src={logo1} alt="" />
        </div>
        <div className="ClientHome-container3">
          <div className="ClientHome-container3-one">
            <p>Used in</p>
            <p1>100+</p1>
            <br />
            <br />
            <p2>Organizations</p2>
          </div>
          <div className="ClientHome-container3-two">
            <p>Supporting</p>
            <p1>340,000+</p1>
            <br />
            <br />
            <p2>Vendors</p2>
          </div>
          <div className="ClientHome-container3-three">
            <p>Loved by</p>
            <p1>1.3million</p1>
            <br />
            <br />
            <p2>Services</p2>
          </div>
          <div className="ClientHome-container3-four">
            <p>Over</p>
            <p1>500 million</p1>
            <br />
            <br />
            <p2>Users</p2>
          </div>
        </div>
        <div className="ClientHome-container4">
          <div className="ClientHome-container4-text1">
            Why Businesses is Deputy
          </div>
          <div className="ClientHome-container5-conttent">
            <div className="ClientHome-container5-left">
              <img
                src="https://a.storyblok.com/f/64010/1040x720/2540970e1e/heuser-ace-hardware.png/m/1040x0"
                alt=""
              />
            </div>
            <div className="ClientHome-container5-right">
              " One of the biggest selling points of Deputy is how quickly my
              Vendors are able to pick it up and use it. "{" "}
            </div>
          </div>
        </div>
        <div className="ClientHome-container5">
          <img
            src="https://connecteam.com/wp-content/uploads/2021/02/about-us_stars_.png"
            alt=""
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ClientHome;
