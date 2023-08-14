import React, {useState} from 'react'
import Counter from './Counter'
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import {Link} from "react-router-dom"
function Contact2() {
    const [adult, setAdult] = useState(2)
    const [child, setChild] = useState(0)

  return (
    <div>
        <h3>PASSENGER</h3>
        <h4>Number of Travelers:</h4>
        <Counter countHeader="Adult (age ⩾ 12)" count={adult} setCount={setAdult} />
        <Counter countHeader="Child (age 0 - 11)" count={child} setCount={setChild} />

        <h3>BUDGET</h3>
        <select>
            <option value="usd">USD</option>
            <option value="vnd">VND</option>
        </select>
        <select>
            <option>Please Select</option>
            <option>$1,000-$2,000 per person</option>
            <option>$2,000-$3,000 per person</option>
            <option>$3,000-$4,000 per person</option>
            <option>$4,000-$5,000 per person</option>
            <option>$5,000-$6,000 per person</option>
            <option>Over $7,000 per person</option>
            
        </select>

        <h4>Does this budget include international airfare?</h4>
        <label><input type="radio" name="budget" value="yes"/>Yes</label>
        <label><input type="radio" name="budget" value="no"/>No</label>
        <h3>HOTEL PREFERENCE</h3>
        <button>Deluxe 5 Stars</button>
        <button>5 Stars</button>
        <button>4 Stars</button>
        <button>3 Stars</button>

        <Link to="../1">Back</Link>

        <button>NEXT STEP <FaArrowRight /></button>






    </div>
  )
}

export default Contact2