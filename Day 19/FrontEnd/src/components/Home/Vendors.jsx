import React, { useEffect } from "react";
import "./Vendors.css";
import Navbar from "./Navbar/Navbar";
import Leftbar from "./Lefftbar/Leftbar";
import { useNavigate } from "react-router-dom";
import { getVendors, removeVendor } from "../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import VendorService from "../../Services/VendorService";


const Vendors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [vendor,setVendor]=useState([])

  const data = useSelector(getVendors)
  const getVendor=async()=>{
    await VendorService.GetVendor().then((response)=>{
      setVendor(response.data);
      // console.log();
    }).catch((error)=>{
      console.log(error);
    })
  }
  useEffect(() => {
    getVendor();
  }, [])
  const DeleteVendor = async(id)=>{
    await VendorService.DeleteVendor(id).then((res)=>{
      console.log(res);
      getVendor();
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <div className="Home-static-titles">
        <Navbar />
        <div className="Home-vendor-page">
          <Leftbar />
          <div className="HomePage-vendor-Content">
            <h3>
              All Vendors<button className="vendor-new-icon">new</button>
            </h3>
            <div className="Homepage-vendor-headerline">
              <h1>
                <u>All</u>
              </h1>
              <h2>Categories</h2>
              <input placeholder="Search" type="text" />
              <button onClick={()=>navigate('/addVendor')}>+Add Vendor</button>
            </div>
            <div className="vendors-lists">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Vendor score</th>
                  <th>Vendor score Metric model</th>
                  <th>Manager</th>
                  <th>State</th>
                  <th>Type</th>
                  <th>RelationShip Date</th>
                  <th>Rank tier</th>
                  <th>Action</th>
                </tr>
                {vendor.map((val, i) => {
                  return (
                    <tr key={i}>
                      <td>{val?.name}</td>
                      <td>{val?.vs}</td>
                      <td>{val?.vsmm}</td>
                      <td>{val?.manager}</td>
                      <td>{val?.state}</td>
                      <td>{val?.type}</td>
                      <td>{val?.relationshipdate}</td>
                      <td>{val?.ranktire}</td>
                      <td onClick={()=>DeleteVendor(val?.vendorid)} style={{cursor:"pointer", color:"red"}}>Delete</td>
                      <td onClick={()=>navigate("/updateVendor/"+val?.vendorid)} style={{cursor:"pointer", color:"red"}}>Update</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vendors;
