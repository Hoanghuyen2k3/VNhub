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
            <NavLink to="contact" activeClassName="active-link">Contact Us</NavLink>

        </div>
        <div className="outlet">
            <Outlet />
        </div>
        <div>
          <h3>Resources</h3>
          <a>Search Tour</a>
          <a>Travel Deals & Promotions</a>
          <a>Download Travel Brochures</a>
          <a>Terms & Conditions</a>
          <a>PaymentGuide</a>
          <a>Book with Confidence</a>
          <a>Travek with Confidence</a>
        </div>
        <div>
          <h3>We're at your service</h3>
          <a>+84 232132325</a>
          <a>+84 1213131311</a>
          <a>vnhub@vietnamtours.com</a>

        </div>
        <div>
          
        </div>
        

    </div>
  )
}

export default Nav