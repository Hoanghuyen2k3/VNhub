import React from 'react'
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";

function Counter({countHeader, count, setCount}) {
  return (
    <div>
        <p>{countHeader}</p> 
        <button onClick={(e)=>count >0 &&setCount(count =>count -1)}><FaMinus /></button>
        <p>{count}</p>
        <button onClick={(e)=>setCount(count =>count +1)}><FaPlus /></button>
    </div>
  )
}

export default Counter