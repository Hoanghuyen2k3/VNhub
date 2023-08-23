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
    <div className="card" onClick={handleClick}>
        <h4>{place.properties.name}</h4>
        <p><span className="bold">Category: </span>{place.properties.kinds.split(",").join(", ")}</p>

    </div>
  )
}

export default Card