import React from 'react'
import { foodAndDestinations } from '../../data'
import Card from './Card'
import "./Food.scss"
function Food() {
  return (
    <div className="foods-container">
      {
        foodAndDestinations.map((food, index)=>
          <Card food={food} index={index} />

        )
      }
    </div>
  )
}

export default Food