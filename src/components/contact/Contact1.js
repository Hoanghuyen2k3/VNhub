import React, {useState} from 'react'
import { FaArrowRight, FaMinus, FaPlus } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import Counter from './Counter';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles
function Contact() {
    const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 3);
    const options=["Classic", "Luxury", "Family", "Honeymoon", "Adventure", "Food", "Beach", "Safari"]
    const [click, setClick]=useState(false)
    const [text, setText]= useState("");
    const [count, setCount] = useState(0)
  return (
    <div>
        <h3>DESTINATION</h3>
        <h4>Cities you'd like to visit:</h4>
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
        <input type="text" placeholder="Enter Other Cities" />

        <h3>TRAVEL STYLE</h3>


        <div className="option-buttons">
        {options.map(option => (
          <button
            key={option}
            className={click ? "yellow": "normal"}
            onClick={()=>setClick(click=>!click)}
          >
            {option}
          </button>
        ))}
      </div>

      <h3>TRAVEL DATE</h3>
      <h4>Arrival Date:</h4>
      <div>
      <h2>Select a Date:</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={today}
        maxDate={maxDate}
        dateFormat="MMMM d, yyyy" // Format for displaying the selected date
        placeholderText="Click to select a date"
      />
      {selectedDate && (
        <p>Selected date: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
      <h4>Duration:</h4>
      <Counter countHeader="Days of Visits" count={count} setCount={setCount} />



      <h3>MORE ABOUT YOUR TRIP</h3>
      <input type="text" placeholder="E.g. Must-sees, must-dos, specific hotel to stay (if any), and anything else you'd like to share with us." />

      <button>NEXT STEP <FaArrowRight /></button>

    
    </div>
  )
}

export default Contact