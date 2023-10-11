import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import VendorService from '../../Services/VendorService';
import Navbar from '../Home/Navbar/Navbar';
import Leftbar from '../Home/Lefftbar/Leftbar';

const UpdateVendor = () => {
    const [vendor, setVendor] = useState({});
    const {id} =  useParams();
    const dispatch = useDispatch();
      const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setVendor({ ...vendor, [name]: value });
    };
    useEffect(() => {
      VendorService.GetVendorById(id).then((res)=>{
        setVendor(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }, [id])
    
    const UpdateVendor = async (e) => {
      e.preventDefault();
      await VendorService.UpdateVendor(id,vendor)
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
      <form action="" onSubmit={UpdateVendor}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Vendor Name"
          value={vendor?.name}
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
  )
}

export default UpdateVendor