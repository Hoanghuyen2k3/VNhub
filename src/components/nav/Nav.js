import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
function Nav() {
  return (
    <div>
        <div>
            <NavLink to="home">Home</NavLink>
            <NavLink to="festival">Festivals</NavLink>
            <NavLink to="attractions">Attractions</NavLink>
            <NavLink to="foods">Vietnamese Cuisine</NavLink>

        </div>
        <div>
            <Outlet />
        </div>
        

    </div>
  )
}

export default Nav