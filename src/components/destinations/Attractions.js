import React, {useState} from 'react'
import { placesToVisit } from '../../data'
import Card from './Card'
import "./Attractions.scss"
import { FaSearchengin } from "react-icons/fa";
import debounce from "lodash.debounce";

function Attractions() {
  const [search, setSearch] = useState("");
  const [placeToVisit, setPlaceToVisit] = useState(placesToVisit);
  const handleSearch = debounce((query) => {
    const sanitizedQuery = query.trim().toLowerCase();
    if (sanitizedQuery) {
      const regex = new RegExp(sanitizedQuery, 'i');
      const filteredPlaces = placesToVisit.filter(place => regex.test(place.name));
      setPlaceToVisit(filteredPlaces);
    } else {
      setPlaceToVisit(placesToVisit);
    }
  }, 300);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
  
  }

  return (
    <div className="places-container">
      <div className="search-container">
        <form onSubmit ={handleSubmit}>
          <input type="text" placeholder='Explore new places...' onChange={(e)=> setSearch(e.target.value)} />
          <button type="submit"><FaSearchengin /></button>
        </form>
      </div>
      <div className="places">
        {
          placeToVisit.map((place, index) => <Card place = {place} index ={index} />)
        }

      </div>

    </div>
    
  )
}

export default Attractions