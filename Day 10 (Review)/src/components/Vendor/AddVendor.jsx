import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVendor } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Leftbar from "../Home/Lefftbar/Leftbar";
import './AddVendor.css'
const AddVendor = () => {
  const [vendor, setVendor] = useState({});

  const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor({ ...vendor, [name]: value });
  };
  const AddVendor = (e) => {
    e.preventDefault();
    dispatch(addVendor(vendor));
    setTimeout(() => {
        navigate('/Vendors')
    }, 1000);
  };
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
          name="vendorName"
          placeholder="Vendor Name"
        />
        <input
          onChange={handleChange}
          type="text"
          name="vendorscore"
          placeholder="Vendor Score"
        />
        <input
          onChange={handleChange}
          type="text"
          name="vendorscoremetricmodel"
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
          name="risktier"
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
