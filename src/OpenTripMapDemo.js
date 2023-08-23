import React, {useEffect} from 'react'
import axios from 'axios'
function OpenTripMapDemo() {
    const apiKey = '5ae2e3f221c38a28845f05b6defb8d26c271159c861f61b9ba77a581';
    const lang = 'en';
    const city = 'Paris';
    const xid="R11801445"
    const placeName = 'New York';
    // const apiUrl = `https://api.opentripmap.com/0.1/en/places/name=${city}&apikey=${apiKey}`;
    const lat =42.65258
    const lon= -73.75623
    
    const apiUrl = `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lon - 0.01}&lat_min=${lat - 0.01}&lon_max=${lon + 0.01}&lat_max=${lat + 0.01}&apikey=${apiKey}`

    const detailUrl = `https://api.opentripmap.com/0.1/${lang}/places/xid/${xid}?apikey=${apiKey}`;
    const url = `https://api.opentripmap.com/0.1/${lang}/places/geoname?name=${placeName}&apikey=${apiKey}`

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
                apiUrl
            );
            console.log(response)
    
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [city]);



  return (
    <div>OpenTripMapDemo</div>
  )
}

export default OpenTripMapDemo