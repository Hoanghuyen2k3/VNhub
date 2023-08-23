import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "./WorldPlace.scss"
function WorldPlace() {
    const [place,setPlace] =useState({})
    const params = useParams();
    console.log(params)


    const apiKey = '5ae2e3f221c38a28845f05b6defb8d26c271159c861f61b9ba77a581';
    const lang = 'en';
    const xid=params.xid;
    // const apiUrl = `https://api.opentripmap.com/0.1/en/places/name=${city}&apikey=${apiKey}`;
    

    const detailUrl = `https://api.opentripmap.com/0.1/${lang}/places/xid/${xid}?apikey=${apiKey}`;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
                detailUrl
            );
            console.log(response)
            
            setPlace(response.data)
    
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
      useEffect(() => {
        console.log(place)
      }, [place]);



  

  return (
    place &&
    <div className="world-place">
      <h1>{place.name}</h1>

      {place?.preview?.source&&<img className="img" src={place.preview.source} alt={place.name} />}
      <div className="info">
        {place?.kinds&&<p><span className="bold">Category: </span>{place.kinds.split(",").join(", ")}</p>}
        <span className='bold'>Address:</span>
        <div className="address">
          {place?.address&&<pre>{Object.entries(place.address)
              .map(([key, value]) => `${key}: ${value}`)
              .join('\n')}</pre>}

        </div>
       
        {place?.rate&&<p><span className='bold'>Rating:</span> {place.rate}</p>}
        {place?.url&&<p><span className='bold'>Website:</span> <a href={place.url} target="_blank" rel="noopener noreferrer">{place.url}</a></p>}
        {place?.wikipedia&&<p><span className='bold'>Wikipedia:</span> <a href={place.wikipedia} target="_blank" rel="noopener noreferrer">{place.wikipedia}</a></p>}
        {place?.wikipedia_extracts?.text&&<p>{place.wikipedia_extracts.text}</p>}


      </div>
      
      
    </div>
  )
}

export default WorldPlace