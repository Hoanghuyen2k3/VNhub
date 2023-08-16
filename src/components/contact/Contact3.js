import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import "./Contact3.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Contact3() {
  const [email, setEmail] = useState("");
  const [c, setC] = useState(false);
  const [term, setTerm] = useState(false);
  const navigate=useNavigate();
  const showToastMessage = () => {
    setC(true);
    if(term){

    
      if (email){

      
        toast.success(
          <div className="toast-message">
            <div className="toast-img">
              <img src="https://img.freepik.com/premium-vector/thank-you-lettering-card-white-background-calligraphy-modern_110338-861.jpg?w=2000" alt="Success Icon" />
            </div>
            <div>
              Success send an inquiry 🍀!
              <br />
              We will contact you soon!
            </div>
          </div>,
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          }
        );
      
        // Delay the navigation by 2 seconds (2000 milliseconds)
        setTimeout(() => {
          navigate("../../home"); // Make sure to import the 'navigate' function properly
        }, 2000);
      }
    }
  };
  return (
    <div className="contact3-container">
      <ToastContainer/>
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
      <h3>CONTACT DETAIL</h3>
      <div className="contact-detail-container">

      <div className="contact-detail">
        <h4>* Email Address:</h4>
        <input
          type="email"
          required
          placeholder="email@example.com (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email ? (
          <div style={{ display: "none" }} className="error-message">
            Please enter your email address.
          </div>
        ) : c&&(
          <div style={{ display: "block" }} className="error-message">
            ❌Please enter your email address.
          </div>
        )}
      </div>



        <div className="contact-detail">
          <h4>Nationality:</h4>
          <input type="text"></input>

        </div>
       <div className="contact-detail">
        <h4>Your Age:</h4>
          <select>
            <option>Please select</option>
            <option>75 above</option>
            <option>55-75</option>
            <option>35-54</option>
            <option>25-34</option>
            <option>under 25</option>
          </select>

       </div>
       <div className="contact-detail">
          <h4>Phone Number:</h4>
          <input type="number" />

       </div>

      </div>
      
      <h4>Subscribe to Our Newsletter:</h4>
      <label><input type="radio" name="subscribe"></input>Yes</label>
      <label><input type="radio" name="subscribe"></input>No</label>

      <p>🌟Subscribe to enter our lucky draw and win yourself an amazing free trip</p>
      <div className="inquiry-container">
        <button onClick={showToastMessage}>SEND INQUIRY</button>
        <label><input type="checkbox" value="true" onChange={()=>setTerm(term=>!term)}/>*I have read & accept the <span>privacy policy.</span></label>
        {term ? (
          <div style={{ display: "none" }} className="error-message">
            Check this box to continue.
          </div>
        ) : c&&(
          <div style={{ display: "block" }} className="error-message">
            ❌Check this box to continue.
          </div>
        )}
        <p>All details provided are kept securely in accordance with our privacy policy.</p>

      </div>
    
      <Link to ="../2">Back</Link>

    </div>
  )
}

export default Contact3