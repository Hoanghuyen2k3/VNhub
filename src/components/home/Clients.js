import React, {useState, useEffect} from 'react'
import {reviews} from "./clientsReview"
import "./clientsReview.scss"
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";

function Clients() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const reviewSlide = setInterval(() => {
      console.log(count)
      if(count >4){
        setCount(0);
      }
      else {     
      setCount((count) => (count + 1));
      }
      }, 3000);
    return () => {
    clearInterval(reviewSlide);
    };
}, [count]);
  return (
    <div className="clients-review-container">
    
        <FaAngleLeft className="review-icon" onClick={() => count>0&&setCount(c =>c-1)} />
        <div className="review-container">
          <div className="review">
            <div className="customer">
              <img src={reviews[count].url} alt="profile-image" />
              <h3>{reviews[count].name}</h3>
            </div>
        
          <p>" {reviews[count].header}"</p>
          <textarea readOnly value={reviews[count].content} />
        </div>
        <div className="review">
          <div className="customer">
            <img src={reviews[count +1].url} alt="profile-image" />
            <h3>{reviews[count +1].name}</h3>

          </div>
          
          <p>" {reviews[count +1].header}"</p>
          <textarea readOnly value={reviews[count+1].content} />
        </div>
          <div className="review num3">
            <div className="customer">
              <img src={reviews[count +2].url} alt="profile-image" />
              <h3>{reviews[count +2].name}</h3>

            </div>
           
            <p>" {reviews[count +2].header}"</p>
            <textarea readOnly value={reviews[count+2].content} />
          </div>
        </div>
        <FaAngleRight className="review-icon" onClick={() => count<5&&setCount(c =>c+1)} />
     
        
      
    </div>
  )
}

export default Clients