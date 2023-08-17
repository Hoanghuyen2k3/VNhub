import React, {useState, useEffect} from 'react'
import { placesToVisit } from '../../data'
import { useParams } from 'react-router-dom'
import "./Place.scss"
import Review from '../review/Review'
import { foodAndDestinations } from '../../data'
import { FaLocationArrow } from "react-icons/fa";
function Place() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    

    const params = useParams();
    console.log(params)
    const pl = placesToVisit.filter(p => p.id === parseInt(params.id));
    const place = pl[0]
    console.log(place)
    const [image, setImage] = useState()
    const [images, setImages] = useState([])
    const [text, setText] = useState("");

    const [review, setReview] = useState([])
    const foods = foodAndDestinations.filter(f=> f.places.includes(place.name) || f.places[0].toLowerCase() === "various")
    console.log(foods)
    useEffect(() => {
        const imageSliderInterval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % place.url.length);
        }, 3000);

        return () => {
        clearInterval(imageSliderInterval);
        };
    }, [place.url.length]);
  return (
    <div className="place">
        
        <div className="place-nav">
            <a href="#description" >Description <FaLocationArrow  className="icon"/></a>
            <a href="#about">About <FaLocationArrow  className="icon"/></a>
            <a href="#todo">Things to do <FaLocationArrow  className="icon"/></a>
            <a href="#cuisine">Cuisine <FaLocationArrow  className="icon"/></a>
            <a href="#review">Reviews <FaLocationArrow  className="icon"/></a>
        </div>
        <div className="place-info">
        <div className="img">
            {place.url.map((url, index) => (
                <img
                key={index}
                src={url}
                alt={`place-img ${index}`}
                style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                />
            ))}
        </div>
            <h1>{place.name}</h1>

            <h2 id="description">Description</h2>
            <p>{place.description}</p>
            <h2 id="about">About</h2>
            <div className="about">{place.moreInfo}</div>
            <h2 id="todo">Things to do</h2>
            <ul>
                {place.thingsToDo.map((d, i)=> <li key={i}>👉{d}</li>)}
            </ul>
            <div id="cuisine">
                <h2>Must Try</h2>
                <div className="cuisine-container">
                {
                    foods.map(f=>
                    <div className="container">
                        <h3>{f.name}</h3>
                        <img src={f.url[0]} alt="food"/>
                    </div>)
                }


                </div>
            </div>
            <div id="review">
                <h2>Reviews</h2>
                <Review image={image} images={images} setText={setText} text={text} setImage={setImage} setImages={setImages} review={review} setReview={setReview} />
               
                 
            </div>
            
        </div>
        
    </div>
  )
}

export default Place