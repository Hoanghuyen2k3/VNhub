import React from 'react'
import { useNavigate } from 'react-router-dom'
function Card({place}) {
    const navigate = useNavigate()
    console.log(place)
    const handleClick=(e)=>{
        e.preventDefault();
        navigate(place.properties.xid)
    }
  return (
    <div onClick={handleClick}>
        <h3>{place.properties.name}</h3>
        <p>{place.properties.kinds}</p>

    </div>
  )
}

export default Card