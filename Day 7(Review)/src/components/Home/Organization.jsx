import React from 'react'
import Navbar from './Navbar/Navbar'
import Leftbar from './Lefftbar/Leftbar'
import './Organization.css'

 const AdminUser = () => {
  return (
    <>
      <div className="Home-static-titles">
       
        <Navbar />
        <div className="Home-organization-page">
          <Leftbar/>
          <div className="HomePage-organization-Content">
            <h1>Organization*</h1>
            <img src='https://static.vecteezy.com/system/resources/previews/000/363/179/non_2x/organization-vector-icon.jpg' alt=''></img>
          </div>
        </div>
      </div>
    </>
  )
}
export default AdminUser
