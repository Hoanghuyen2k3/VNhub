import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function WorldPlace() {
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
    
            
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);



  

  return (
    <div>Place</div>
  )
}

export default WorldPlace