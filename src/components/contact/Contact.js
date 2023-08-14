import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
function Contact() {
  return (
    <div>
        <p>Tell us about your upcoming trip — the sights you want to see, the type of accommodation you prefer, the occasion to celebrate, and even the unusual but fascinating activity you'd like to try. We will match you with a local expert who knows your destination inside out and will work with you until you are completely satisfied.</p>
        <Outlet/>
    </div>
  )
}

export default Contact