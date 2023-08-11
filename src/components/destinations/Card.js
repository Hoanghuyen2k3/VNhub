import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";
import "./Card.scss"

function Card({place, index}) {
  const navigate = useNavigate();
  const handleClick=(e)=>{
    e.preventDefault();
    navigate(`${index}`);
  }
  return (
    
    <Tilt>
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          onClick={handleClick} 
          key={index}
          className="card-container"
          >
          <div className="img"><img src={place.url[0]} /></div>
          <h3>{place.name}</h3>
          <p>{place.description}</p>

        </div>

      </motion.div>

    </Tilt>
    
  )
}

export default Card





