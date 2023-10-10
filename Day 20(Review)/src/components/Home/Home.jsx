import React from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Leftbar from "./Lefftbar/Leftbar";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/UserSlice";

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <div className="Home-static-titles">
        <Navbar />
        <div className="Home-main-page">
          <Leftbar />
          <div className="HomePageContent">
            <h1>
              Welcome to Home. Dear, <i class="fa-solid fa-file-signature"></i>
              <u>{user ? user.email : "user"}</u> !
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
