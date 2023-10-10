import React from 'react'
import './Contactus.css'
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import Footer from '../Footer/Footer'
const Contactus = () => {
  return (
     <>
     <ClientNavbar/>
     <div className="Contactus-container">
        <div className="Contactus-containerbox">
               <form >
                  <h2>Contact Us</h2>
                  <div className="Contactus-list">
                  <label for="fname">First Name : </label>
                  <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                  <label for="email">Email :</label>
                  <input type="text" id="email" name="email" placeholder="Your Email.."/>
                  <label for="country">Country :</label>
                  <select id="country" name="country">
                     <option value="australia">India</option>
                     <option value="canada">Canada</option>
                     <option value="usa">USA</option>
                  </select>
                  <label for="subject">Message :</label>
                  <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
                  <input  className='Contactus-list-submitbutton' type="submit" value="Submit"/>
                  </div>
           </form>

        </div>
     </div>
     <Footer/>
     </>
  )
}

export default Contactus