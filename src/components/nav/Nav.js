import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import "./Nav.scss"
function Nav() {
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