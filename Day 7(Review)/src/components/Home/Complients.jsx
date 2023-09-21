import React from 'react'

import './Complients.css'
import Navbar from './Navbar/Navbar'
import Leftbar from './Lefftbar/Leftbar'
const Complients = () => {
    
  return (
  <>
    <div className="Home-static-titles">
       
        <Navbar />
        <div className="Home-complients-page">
          <Leftbar/>
          <div className="HomePage-complients-Content">
          <h1>Complients *</h1>
          <img src="https://i.pinimg.com/originals/2d/51/b7/2d51b7f79a341ea9aa3ca1c80151d255.png" alt="" /></div>
        </div>
      </div></>
  )
}

export default Complients