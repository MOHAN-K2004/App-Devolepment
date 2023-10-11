import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVendor } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Leftbar from "../Home/Lefftbar/Leftbar";
import './AddVendor.css'
import VendorService from "../../Services/VendorService";
const AddVendor = () => {
  const [vendor, setVendor] = useState({});

  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };
  const AddVendor = async (e) => {
    e.preventDefault();
    await VendorService.AddVendor(vendor)
        .then((response) => {
          console.log(response);
            navigate('/vendors')
        })
        .catch((error) => {
          console.log(error);
        });
    }
  return (
    <div>
        <Navbar/>
        <div className="AddVendors-container">
        <Leftbar/>
        <div className="AddVendors-containerbox">
      <form action="" onSubmit={AddVendor}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Vendor Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="vs"
          placeholder="Vendor Score"
        />
        <input
          onChange={handleChange}
          type="text"
          name="vsmm"
          placeholder="Vendors core metric model"
        />
        <input
          onChange={handleChange}
          type="text"
          name="manager"
          placeholder="Manager"
        />
        <input
          onChange={handleChange}
          type="text"
          name="state"
          placeholder="State"
        />
        <input
          onChange={handleChange}
          type="text"
          name="type"
          placeholder="Type"
        />
        <input
          onChange={handleChange}
          type="text"
          name="relationshipdate"
          placeholder="Relationship Date"
        />
        <input
          onChange={handleChange}
          type="text"
          name="ranktire"
          placeholder="Risk tier "
        />
        <input type="submit" value={"Add Vendor"}  className="AddVendors-containerbox-submit"/>
      </form>
      </div>
      </div>
    </div>
  );
};

export default AddVendor;
