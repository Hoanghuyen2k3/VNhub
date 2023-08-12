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
    navigate(`${index}`);
  }
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <span>
          &nbsp;
        </span>
          <motion.div variants={fadeIn("left", "spring", index * 0.5, 0.75)}>
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 100,
              }}
              onClick={handleClick} 
              key={index}
              className="card-container"
              >
                <div className="img"><img width={100} src={food.url[0]} /></div>
                <h2>{food.name}</h2>
                <p className="foods-location">{`Locations: ${food.places.join(", ")}`}</p>
            </div>

          </motion.div>

    

       
      </motion.section>



    
  )
}

export default Card





