import React, {useState} from 'react'
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import Counter from './Counter';
import "./Contact1.scss"
import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles
function Contact() {
    const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 3);
    const options=["Classic", "Luxury", "Family", "Honeymoon", "Adventure", "Food", "Beach", "Safari"]
    const [click, setClick]=useState({
      1: false,
      2: false,
      3: false,
      4:false,
      5: false,
      6: false,
      7: false,
      8:false
    })
    const [text, setText]= useState("");
    const [count, setCount] = useState(0)
  return (
    <div className="contact1-container">
      
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
        <h3>DESTINATION</h3>
        <h4>Cities you'd like to visit:</h4>
        <div className="destination-container">
          <label>
              <input type="checkbox" /> Hue
          </label>
          <label>
              <input type="checkbox" /> Ho Chi Minh City
          </label>
          <label>
              <input type="checkbox" /> Hanoi
          </label>
          <label>
              <input type="checkbox" /> Sapa
          </label>
          <label>
              <input type="checkbox" /> Da Nang
          </label>
          <label>
              <input type="checkbox" /> Hoi An
          </label>
          <label>
              <input type="checkbox" /> Mekong Delta
          </label>
          <label>
              <input type="checkbox" /> Nha Trang
          </label>
          <input className="input" type="text" placeholder="Enter Other Cities" />
        </div>
        
        <h3>TRAVEL STYLE</h3>


        <div className="option-buttons">
        {options.map((option, index) => (
          <button
            key={option}
            className={click[index+1] ? "yellow normal": "normal"}
            onClick={()=>setClick((click)=>({...click, [index+1]: !click[index+1]}))}
          >
            {option}
          </button>
        ))}
      </div>

      <h3>TRAVEL DATE</h3>
      <div className="date-container">
        <div className="choose-date">
          <h4>Arrival Date:</h4>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={today}
            maxDate={maxDate}
            className="custom-datepicker"
            dateFormat="MMMM d, yyyy" // Format for displaying the selected date
            placeholderText="Click to select a date"
          />

        </div>
        
        <div className="choose-date">
          <h4>Duration:</h4>
          <Counter countHeader="Days of Visits" count={count} setCount={setCount} />
      </div>

      </div>
      <h3>MORE ABOUT YOUR TRIP</h3>
      <div className="more-container">
        <textarea type="text" placeholder="E.g. Must-sees, must-dos, specific hotel to stay (if any), and anything else you'd like to share with us." />

        <button>NEXT STEP <FaArrowRight /></button>


      </div>
      
    
    </div>
  )
}

export default Contact