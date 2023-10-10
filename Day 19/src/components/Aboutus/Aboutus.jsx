import React from 'react'
import './Aboutus.css'
import ClientNavbar from '../ClientNavbar/ClientNavbar'
import {AiFillGithub,AiOutlineFacebook} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {SlSocialLinkedin} from 'react-icons/sl'
import Footer from '../Footer/Footer'

const Aboutus = () => {
  return (
        <>
         <ClientNavbar/>
         <div className="Aboutus-cotainer">
            <div className="Aboutus-container1">
                    <div className="Aboutus-container1-left">
                        <h1>MOHAN K</h1>
                           <p1>Software Devoleper<br /></p1>
                        <p><b>Contact To</b></p>
                        <p>727821tucs129@skct.edu.in<br /></p>
                        <p>+8524892428<br /></p>
                        <div className='Aboutus-container1-socialmedia-icons'>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://github.com/MOHAN-K2004/" class="link-button"><AiFillGithub/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.instagram.com/mohan._.vetri/" class="link-button"><FaInstagram/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox" class="link-button"><HiOutlineMail/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=100019415755883" class="link-button"><AiOutlineFacebook/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.linkedin.com/in/mohan-k-a59118257/" class="link-button"><SlSocialLinkedin/></a>
                        </div>
                    </div>
                    <div className="Aboutus-container1-right">
                        <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1695564136/1_vsfiob.jpg" alt="" />
                        </div>
            </div>
            <div className="Aboutus-container2">
                    <div className="Aboutus-container2-left">
                        <h1>PARANTHAMAN L</h1>
                       
                           <p1>Software Devoleper<br /></p1>
                        <p><b>Contact To</b></p>
                        <p>727821tucs149@skct.edu.in<br /></p>
                        <p>+91 9626474250<br /></p>
                        <div className='Aboutus-container3-socialmedia-icons'>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://github.com/paranthaman-l/" class="link-button"><AiFillGithub/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.instagram.com/_paranthaman_l/" class="link-button"><FaInstagram/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://github.com/MOHAN-K2004/" class="link-button"><HiOutlineMail/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.facebook.com/profile.php?id=100055478733925" class="link-button"><AiOutlineFacebook/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.linkedin.com/in/paranthamanl/" class="link-button"><SlSocialLinkedin/></a>

                        </div>
                    </div>
                    <div className="Aboutus-container2-right">
                        <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1695564134/2_s65vt0.jpg" alt="" />
                        </div>
            </div>
            <div className="Aboutus-container3">
                    <div className="Aboutus-container3-left">
                        <h1>PRAVEEN CHAKRAVARTHI S</h1>
                   
                        
                        <p1>Software Devoleper<br /></p1>
                        <p><b>Contact To</b></p>
                        <p>727821tucs155@skct.edu.in<br /></p>
                        <p>+91 6385504441<br /></p>
                        <div className='Aboutus-container3-socialmedia-icons'>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://github.com/praveenchakravarthi01/" class="link-button"><AiFillGithub/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.instagram.com/s_praveen_18/" class="link-button"><FaInstagram/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://github.com/MOHAN-K2004/" class="link-button"><HiOutlineMail/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.facebook.com/praveen.chakravarthi.5249" class="link-button"><AiOutlineFacebook/></a>
                                {/* eslint-disable-next-line */}
                            <a target='_blank' href="https://www.linkedin.com/in/praveen-chakravarthi-6b3b571b1/" class="link-button"><SlSocialLinkedin/></a>

                        </div>
                    </div>
                    <div className="Aboutus-container3-right">
                            <img src="https://res.cloudinary.com/doz5njr9h/image/upload/v1695564887/WhatsApp_Image_2023-09-24_at_19.43.07_scjaet.jpg" alt="" />
                    </div>
            </div>
         </div>
         <Footer/>




        </>
  )
}

export default Aboutus










































// import React from 'react'
// import './Aboutus.css'
// import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
// const Aboutus = () => {
//   return (
//     <div>

// <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
//   <div class="container"><a href="#" class="navbar-brand d-flex align-items-center"> <i class="fa fa-snowflake-o fa-lg text-primary mr-2"></i><strong>Snowflake</strong></a>
//     <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
//     <div id="navbarSupportedContent" class="collapse navbar-collapse">
//       <ul class="navbar-nav ml-auto">
//         <li class="nav-item active"><a href="#" class="nav-link font-italic"> Home </a></li>
//         <li class="nav-item active"><a href="#" class="nav-link font-italic"> About </a></li>
//         <li class="nav-item active"><a href="#" class="nav-link font-italic"> Services </a></li>
//         <li class="nav-item active"><a href="#" class="nav-link font-italic"> Contact</a></li>
//       </ul>
//     </div>
//   </div>
// </nav>

// <div class="bg-light">
//   <div class="container py-5">
//     <div class="row h-100 align-items-center py-5">
//       <div class="col-lg-6">
//         <h1 class="display-4">About us page</h1>
//         <p class="lead text-muted mb-0">Create a minimal about us page using Bootstrap 4.</p>
//         <p class="lead text-muted">Snippet by <a href="https://bootstrapious.com/snippets" class="text-muted"> 
//                     <u>Bootstrapious</u></a>
//         </p>
//       </div>
//       <div class="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid"/></div>
//     </div>
//   </div>
// </div>

// <div class="bg-white py-5">
//   <div class="container py-5">
//     <div class="row align-items-center mb-5">
//       <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
//         <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
//         <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
//       </div>
//       <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
//     </div>
//     <div class="row align-items-center">
//       <div class="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
//       <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
//         <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
//         <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
//       </div>
//     </div>
//   </div>
// </div>

// <div class="bg-light py-5">
//   <div class="container py-5">
//     <div class="row mb-4">
//       <div class="col-lg-5">
//         <h2 class="display-4 font-weight-light">Our team</h2>
//         <p class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//       </div>
//     </div>

//     <div class="row text-center">
    
//       <div class="col-xl-3 col-sm-6 mb-5">
//         <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
//           <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
//           <ul class="social mb-0 list-inline mt-3">
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
//           </ul>
//         </div>
//       </div>
 
//       <div class="col-xl-3 col-sm-6 mb-5">
//         <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
//           <h5 class="mb-0">Samuel Hardy</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
//           <ul class="social mb-0 list-inline mt-3">
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
//           </ul>
//         </div>
//       </div>
     
//       <div class="col-xl-3 col-sm-6 mb-5">
//         <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
//           <h5 class="mb-0">Tom Sunderland</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
//           <ul class="social mb-0 list-inline mt-3">
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
//           </ul>
//         </div>
//       </div>
    
//       <div class="col-xl-3 col-sm-6 mb-5">
//         <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
//           <h5 class="mb-0">John Tarly</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
//           <ul class="social mb-0 list-inline mt-3">
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
//             <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
//           </ul>
//         </div>
//       </div>
    

//     </div>
//   </div>
// </div>
// <footer class="bg-light pb-5">
//   <div class="container text-center">
//     <p class="font-italic text-muted mb-0">&copy; Copyrights Company.com All rights reserved.</p>
//   </div>
// </footer>
//     </div>
//   )
// }

// export default Aboutus