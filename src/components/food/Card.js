import React from 'react'

function Card({food, index}) {
  return (
    <div>
        <div><img width={100} src={food.url[0]} /></div>
        <h1>{food.name}</h1>
    </div>
  )
}

export default Card