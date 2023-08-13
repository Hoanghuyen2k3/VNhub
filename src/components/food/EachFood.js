import React from 'react'
import { useParams } from 'react-router-dom'
import { foodAndDestinations } from '../../data'
function EachFood() {
  const params = useParams();
  console.log(params)
  const pl = foodAndDestinations.filter(p => p.id === parseInt(params.id));
  const food = pl[0]
  console.log(food)
  return (
    <div>EachFood</div>
  )
}

export default EachFood