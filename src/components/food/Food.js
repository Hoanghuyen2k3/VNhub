import React, {useState} from 'react'
import { foodAndDestinations } from '../../data'
import Card from './Card'
import "./Food.scss"
import { FaSearchengin } from "react-icons/fa";
import debounce from "lodash.debounce";
function Food() {
  const [search, setSearch] = useState("");
  const [foodAndDes, setFoodAndDes] = useState(foodAndDestinations);
  const handleSearch = debounce((query) => {
    const sanitizedQuery = query.trim().toLowerCase();
    if (sanitizedQuery) {
      const regex = new RegExp(sanitizedQuery, 'i');
      const filteredFood = foodAndDestinations.filter(f => regex.test(f.name));
      setFoodAndDes(filteredFood);
    } else {
      setFoodAndDes(foodAndDestinations);
    }
  }, 300);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  
  }
  return (
    <div className="main-food-container">
      <div className="search-container">
        <form onSubmit ={handleSubmit}>
          <input type="text" placeholder='Search foods ...' onChange={(e)=> setSearch(e.target.value)} />
          <button type="submit"><FaSearchengin /></button>
        </form>
      </div>
       <div className="foods-container">
          {
            foodAndDes.map((food, index)=>
              <Card food={food} index={index} />

            )
          }
        </div>

    </div>
   
  )
}

export default Food