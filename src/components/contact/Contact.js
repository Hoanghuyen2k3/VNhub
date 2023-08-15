import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import "./Contact.scss"
import { FaPhoneFlip, FaLocationDot } from "react-icons/fa6";
function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <img className="road-trip" src="https://media.wired.com/photos/60c25edfc99dc8c320fb6cf5/4:3/w_2131,h_1598,c_limit/Games-Road-Trip-Road96-1.jpg" alt="road-trip" />
        <p className="about">Tell us about your upcoming trip — the sights you want to see, the type of accommodation you prefer, the occasion to celebrate, and even the unusual but fascinating activity you'd like to try. We will match you with a local expert who knows your destination inside out and will work with you until you are completely satisfied.</p>
        <Outlet/>
      </div>
      <div className="contact-location">
        <FaPhoneFlip className="phone-icon" />
        <p>Telephone</p>
        <h3>+84 232132325</h3>
        <h3>+84 121313131</h3>
        <FaLocationDot className="loc-icon" />
        <p>Office</p>
        <ul>
          <li>Hanoi: <p>11 Nguyen Dinh Hue, Dong Da, Ha Noi</p> </li>
          <li>Hai Duong: <p>10 Ung Hoe, Ninh Giang, Hai Duong</p></li>
          <li>Ho Chi Minh: <p>5 Nguyen Hue, Hai Ba Trung, Ho Chi Minh</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Contact