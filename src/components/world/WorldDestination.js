import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Card from './Card';
import Weather from './Weather';
import "./WorldDestination.scss"
function WorldDestination() {
    const [city, setCity] = useState("");
    const [places, setPlaces] = useState([])
    const [placeName, setPlaceName] = useState("");

    const apiKey = '5ae2e3f221c38a28845f05b6defb8d26c271159c861f61b9ba77a581';
    const lang = 'en';
    const xid="R11801445"
    // const apiUrl = `https://api.opentripmap.com/0.1/en/places/name=${city}&apikey=${apiKey}`;
    

    const detailUrl = `https://api.opentripmap.com/0.1/${lang}/places/xid/${xid}?apikey=${apiKey}`;
    const url = `https://api.opentripmap.com/0.1/${lang}/places/geoname?name=${placeName}&apikey=${apiKey}`

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setCity(placeName)
        try {
            const response = await axios.get(
                url
            );
            console.log(response)
            const lon= response.data.lon
            const lat= response.data.lat


            const res = await axios.get(
                `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lon - 0.01}&lat_min=${lat - 0.01}&lon_max=${lon + 0.01}&lat_max=${lat + 0.01}&apikey=${apiKey}`

            );
            console.log(res)
            setPlaces(res.data.features)
            console.log(places)

    
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    

  return (
    <div className="world-container">
        <input type="text" onChange={(e)=>setPlaceName(e.target.value)} placeholder="Enter city ..." />
        <button type="submit" onClick={handleSubmit} >Submit</button>
        <Weather c={city} />
        <div className="places-container">
            {
                places? places.map(place=> <Card place ={place} /> ):<></>
            }
        </div>
    </div>
  )
}

export default WorldDestination