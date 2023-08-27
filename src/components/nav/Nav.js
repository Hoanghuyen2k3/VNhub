import React, {useState, useEffect} from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import "./Nav.scss"
import ChatBox from '../chatbox/ChatBox'
import { useDispatch, useSelector } from 'react-redux';
import { selectShow, showChat } from '../../features/chatSlice';
function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() =>console.log(show), [show])

  const handleChat =(e)=>{
    e.preventDefault();
    setShow(show =>!show);
    console.log(show)

  }
  return (
    <div>
        <div className="main-nav">

            <NavLink to="home" activeClassName="active-link">VNhub</NavLink>
            <NavLink to="attractions" activeClassName="active-link">Attractions</NavLink>
            <NavLink to="foods" activeClassName="active-link">Vietnamese Cuisine</NavLink>
            <NavLink to="city" activeClassName="active-link">Explore World</NavLink>

            <NavLink to="contact" activeClassName="active-link">Contact Us</NavLink>

        </div>
        <div className="outlet">
            <Outlet />
        </div>
          {
            show ? <div className="chatbox"><ChatBox /></div>:(
              <div className="ai-img-container" onClick={handleChat}>
                <img className="ai-img" src="https://play-lh.googleusercontent.com/Oe0NgYQ63TGGEr7ViA2fGA-yAB7w2zhMofDBR3opTGVvsCFibD8pecWUjHBF_VnVKNdJ=w240-h480-rw" alt="AI-chatbox" />

              </div>

            )
          }
          

        <div className="footer">
          <div className="resources-container">
            <h3>Resources</h3>
            <div className="link">
              <a href=".">Search Tour</a>
              <a href=".">Travel Deals & Promotions</a>
              <a href=".">Download Travel Brochures</a>
              <a href=".">Terms & Conditions</a>
              <a href=".">PaymentGuide</a>
              <a href=".">Book with Confidence</a>
              <a href=".">Travek with Confidence</a>

            </div>
           
          </div>
          <div className="contact-footer">
            <h3>We're at your service</h3>
            <div className="contact">
              <p>+84 232132325</p>
              <p>+84 1213131311</p>
              <p>vnhub@vietnamtours.com</p>

            </div>
           

          </div>
         
          
        </div>
        <div className="foot">
            Copyright &copy; 2023 VNhub. All rights reserved.
            
        </div>
        
        

    </div>
  )
}

export default Nav