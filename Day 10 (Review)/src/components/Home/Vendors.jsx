import React from "react";
import "./Vendors.css";
import Navbar from "./Navbar/Navbar";
import Leftbar from "./Lefftbar/Leftbar";
import { useNavigate } from "react-router-dom";
import { getVendors, removeVendor } from "../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";


const Vendors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getVendors)
  // const data = [
  //   {
  //     name: "Vendor A",
  //     vendorscore: 45.3,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Ram",
  //     state: "TamilNadu",
  //     type: "Software",
  //     relationshipdate: "2009-08-09",
  //     risktier: "Valued Partner",
  //   },
  //   {
  //     name: "Vendor B",
  //     vendorscore: 54.56,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Raja",
  //     state: "Kerala",
  //     type: "Software",
  //     relationshipdate: "2019-04-29",
  //     risktier: "Statergic partner",
  //   },
  //   {
  //     name: "Vendor C",
  //     vendorscore: 87.0,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Som",
  //     state: "TamilNadu",
  //     type: "Hardware",
  //     relationshipdate: "2005-11-13",
  //     risktier: "Valued Partner",
  //   },
  //   {
  //     name: "Vendor A",
  //     vendorscore: 45.3,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Ram",
  //     state: "TamilNadu",
  //     type: "Software",
  //     relationshipdate: "2009-08-09",
  //     risktier: "Valued Partner",
  //   },
  //   {
  //     name: "Vendor B",
  //     vendorscore: 54.56,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Raja",
  //     state: "Kerala",
  //     type: "Software",
  //     relationshipdate: "2019-04-29",
  //     risktier: "Statergic partner",
  //   },
  //   {
  //     name: "Vendor C",
  //     vendorscore: 87.0,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Som",
  //     state: "TamilNadu",
  //     type: "Hardware",
  //     relationshipdate: "2005-11-13",
  //     risktier: "Valued Partner",
  //   },
  //   {
  //     name: "Vendor A",
  //     vendorscore: 45.3,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Ram",
  //     state: "TamilNadu",
  //     type: "Software",
  //     relationshipdate: "2009-08-09",
  //     risktier: "Valued Partner",
  //   },
  //   {
  //     name: "Vendor B",
  //     vendorscore: 54.56,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Raja",
  //     state: "Kerala",
  //     type: "Software",
  //     relationshipdate: "2019-04-29",
  //     risktier: "Statergic partner",
  //   },
  //   {
  //     name: "Vendor C",
  //     vendorscore: 87.0,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Som",
  //     state: "TamilNadu",
  //     type: "Hardware",
  //     relationshipdate: "2005-11-13",
  //     risktier: "Valued Partner",
  //   },
  //   {
  //     name: "Vendor A",
  //     vendorscore: 45.3,
  //     vendorscoremetricmodel: "IT Service",
  //     manager: "Ram",
  //     state: "TamilNadu",
  //     type: "Software",
  //     relationshipdate: "2009-08-09",
  //     risktier: "Valued Partner",
  //   },
  // ];
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
                {data.map((val, i) => {
                  return (
                    <tr key={i}>
                      <td>{val.vendorName}</td>
                      <td>{val.vendorscore}</td>
                      <td>{val.vendorscoremetricmodel}</td>
                      <td>{val.manager}</td>
                      <td>{val.state}</td>
                      <td>{val.type}</td>
                      <td>{val.relationshipdate}</td>
                      <td>{val.risktier}</td>
                      <td onClick={() => dispatch(removeVendor(i))} style={{cursor:"pointer", color:"red"}}>delete</td>
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
