import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";
import "../destinations/Card.scss"
import Wrapper from "../../hoc/Wrapper.js"

function Card({food, index}) {
  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault();
    navigate(`${food.id}`);
  }
  return (
   
    <div onClick={handleClick} 
    key={index}
    className="card-container"
    >
      <div className="img"><img width={100} src={food.url[0]} /></div>
      <h2>{food.name}</h2>
      <p className="foods-location">{`Locations: ${food.places.join(", ")}`}</p>
  </div>


  )
}

export default Card





