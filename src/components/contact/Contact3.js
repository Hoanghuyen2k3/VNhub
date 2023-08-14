import React from 'react'
import { Link } from 'react-router-dom'
function Contact3() {
  return (
    <div>
      <h3>CONTACT DETAIL</h3>
      <h4>Full Name:</h4>
      <input type="text" />
      <h4>* Email Address:</h4>
      <input type="email"  required placeholder='email@example.com (required)'/>
      <h4>Nationality:</h4>
      <input type="text"></input>
      <h4>Your Age:</h4>
      <select>
        <option>Please select</option>
        <option>75 above</option>
        <option>55-75</option>
        <option>35-54</option>
        <option>25-34</option>
        <option>under 25</option>
      </select>
      <h4>Phone Number:</h4>
      <input type="number" />
      <h4>Subscribe to Our Newsletter:</h4>
      <label><input type="radio" name="subscribe"></input>Yes</label>
      <label><input type="radio" name="subscribe"></input>No</label>

      <p>🌟Subscribe to enter our lucky draw and win yourself an amazing free trip</p>
      <button>SEND INQUIRY</button>
      <label><input type="checkbox" value="true"/>*I have read & accept the <span>privacy policy.</span></label>
      <p>All details provided are kept securely in accordance with our privacy policy.</p>
      <Link to ="../2">Back</Link>

    </div>
  )
}

export default Contact3