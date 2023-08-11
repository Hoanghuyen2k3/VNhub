import React from 'react'
import { placesToVisit } from '../../data'
import Card from './Card'
import "./Attractions.scss"
function Attractions() {

  return (
    <div className="places">
      {
        placesToVisit.map((place, index) => <Card place = {place} index ={index} />)
      }

    </div>
  )
}

export default Attractions