import React from 'react'
import { foodAndDestinations } from '../../data'
import Card from './Card'
function Food() {
  return (
    <div>
      {
        foodAndDestinations.map((food, index)=>
          <Card food={food} index={index} />

        )
      }
    </div>
  )
}

export default Food