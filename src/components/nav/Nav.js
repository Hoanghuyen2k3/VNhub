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
        

    </div>
  )
}

export default Nav