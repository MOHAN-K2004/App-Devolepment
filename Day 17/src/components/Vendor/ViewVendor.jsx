import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVendors, removeVendor } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

const ViewVendor = () => {
  const vendors = useSelector(getVendors);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => navigate("/addVendor")}>Add Vendor</button>
      <table>
        <tr>
          <th>Vendor Name</th>
          <th>Company Name</th>
          <th>email</th>
          <th>Service</th>
          <th>Action</th>
        </tr>
        {vendors?.map((vendor, i) => {
          return (
            <tr>
              <td>{vendor?.vendorName}</td>
              <td>{vendor?.vendorscore}</td>
              <td>{vendor?.vendorscoremetricmodel}</td>
              <td>{vendor?.manager}</td>
              <td>{vendor?.state}</td>
              <td>{vendor?.type}</td>
              <td>{vendor?.relationshipdate}</td>
              <td>{vendor?.risktier}</td>
              <td onClick={() => dispatch(removeVendor(i))}>delete</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
};

export default ViewVendor;
