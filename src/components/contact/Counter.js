import React from 'react'
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";

function Counter({countHeader, count, setCount}) {
  return (
    <div className="counter-container">
        <p>{countHeader}</p> 
        <div className="counter">
          <button onClick={(e)=>count >0 &&setCount(count =>count -1)}><FaMinus /></button>
          <p>{count}</p>
          <button onClick={(e)=>setCount(count =>count +1)}><FaPlus /></button>

        </div>
        
    </div>
  )
}

export default Counter