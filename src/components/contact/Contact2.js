import React, {useState} from 'react'
import Counter from './Counter'
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom"
import "./Contact2.scss"
function Contact2() {
    const [adult, setAdult] = useState(2)
    const [child, setChild] = useState(0)
    const [hotel, setHotel] = useState("");
    const navigate = useNavigate();
    const handleNavigate = (e)=>{
      e.preventDefault();
      navigate("../3")
    }
    const handleHotel = (e)=>{
      e.preventDefault();
      if(hotel === e.target.value){
        setHotel("");
      }
      else {
        setHotel(e.target.value)}
    }

  return (
    <div className="contact2-container">
      <div className="where-container">
        <div className="line"></div>
        <div className="container">
          <div className="num one">1</div>
          <p>Travel Idea</p>
        </div>
        <div className="container">
          <div className="num two">2</div>
          <p>Passenger</p>
        </div>
        <div className="container">
          <div className="num three">3</div>
          <p>Contact Detail</p>
        </div>
      </div>
      
        <h3>PASSENGER</h3>
        <h4>Number of Travelers:</h4>
        <div className="pass-container">
          <Counter countHeader="Adult (age ⩾ 12)" count={adult} setCount={setAdult} />
          <Counter countHeader="Child (age 0 - 11)" count={child} setCount={setChild} />

        </div>
       

        <h3>BUDGET</h3>
        <div className="budgets">
          <div className="budget-container">
            <select className="budget">
                <option value="usd">USD</option>
                <option value="vnd">VND</option>
            </select>
            <select className="budget">
                <option>Please Select</option>
                <option>$1,000-$2,000 per person</option>
                <option>$2,000-$3,000 per person</option>
                <option>$3,000-$4,000 per person</option>
                <option>$4,000-$5,000 per person</option>
                <option>$5,000-$6,000 per person</option>
                <option>Over $7,000 per person</option>
                
            </select>
            
          </div>

          <div className="budget-ques">
            <h4>Does this budget include international airfare?</h4>
            <label><input type="radio" name="budget" value="yes"/>Yes</label>
            <label><input type="radio" name="budget" value="no"/>No</label>
          </div>
        

        </div>
        

        
        <h3>HOTEL PREFERENCE</h3>
        <div className="hotel-container">
          <button className={hotel ==="no1" ? "no1 hotel" : "hotel"} onClick={handleHotel} value="no1">Deluxe 5 Stars</button>
          <button className={hotel ==="no2" ? "no2 hotel" : "hotel"} onClick={handleHotel} value="no2">5 Stars</button>
          <button className={hotel ==="no3" ? "no3 hotel" : "hotel"} onClick={handleHotel} value="no3">4 Stars</button>
          <button className={hotel ==="no4" ? "no4 hotel" : "hotel"} onClick={handleHotel} value="no4">3 Stars</button>

        </div>
       <div className="linkTo">
          <Link to="..">Back</Link>

          <button className="next-button" onClick={handleNavigate}>NEXT STEP <FaArrowRight /></button>



       </div>

    </div>
  )
}

export default Contact2