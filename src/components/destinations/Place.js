import React, {useState} from 'react'
import { placesToVisit } from '../../data'
import { useParams } from 'react-router-dom'
import "./Place.scss"
import Review from '../review/Review'
import { foodAndDestinations } from '../../data'
function Place() {
    const params = useParams();
    console.log(params)
    const pl = placesToVisit.filter(p => p.id === parseInt(params.id));
    const place = pl[0]
    console.log(place)
    const [image, setImage] = useState()
    const [images, setImages] = useState([])
    const [text, setText] = useState("");

    const [review, setReview] = useState({})
    const foods = foodAndDestinations.filter(f=> f.places.includes(place.name) || f.places[0].toLowerCase() === "various")
    console.log(foods)
  return (
    <div className="place">
        <h1>{place.name}</h1>

        <div className="place-nav">
            <a href="#description" >Description</a>
            <a href="#about">About</a>
            <a href="#img">Images</a>
            <a href="#todo">Things to do</a>
            <a href="#cuisine">Cuisine</a>
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
            <div id="cuisine">
                <h2>Must Try</h2>
                {
                    foods.map(f=><div>
                        <h3>{f.name}</h3>
                        <img src={f.url[0]} />
                    </div>)
                }

            </div>
            <div id="review">
                <h2>Reviews</h2>
                <Review image={image} images={images} setText={setText} text={text} setImage={setImage} setImages={setImages} review={review} setReview={setReview} />
               
                 
            </div>
            <h1>Reviews</h1>
            
        </div>
        
    </div>
  )
}

export default Place