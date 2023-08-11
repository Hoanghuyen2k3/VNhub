import React, {useState} from 'react'
import { placesToVisit } from '../../data'
import { useParams } from 'react-router-dom'
import "./Place.scss"

function Place() {
    const params = useParams();
    console.log(params)
    const index = parseInt(params.index);
    const place = placesToVisit[index];
    const [image, setImage] = useState()
  return (
    <div className="place">
        <h1>{place.name}</h1>

        <div className="place-nav">
            <a href="#description" >Description</a>
            <a href="#about">About</a>
            <a href="#img">Images</a>
            <a href="#todo">Things to do</a>
            <a href="#review">Reviews</a>
        </div>
        <div className="place-info">
            <div><img src={place.url[0]} /></div>
            <h2 id="description">Desccription</h2>
            <p>{place.description}</p>
            <h2 id="about">About</h2>
            <div className="about">{place.moreInfo}</div>
            <h2 id="img">Images</h2>
            <div className="img">
                <img src={place.url[1]} />
                <img src={place.url[2]} />
            </div>
            <h2 id="todo">Things to do</h2>
            <ul>
                {place.thingsToDo.map((d, i)=> <li key={i}>👉{d}</li>)}
            </ul>
            <div id="review">
                <h2>Reviews</h2>
                <form>
                    <input type="text" placeholder="Write your experiences..."/>
                    <input  style={{ display: 'none' }} id="icon-button-file"
                type="file" onChange={(e)=>{
                    const file = e.target.files[0];
                    file &&setImage(URL.createObjectURL(e.target.files[0]))}} />
                </form>
                 
            </div>
            
        </div>
        
    </div>
  )
}

export default Place