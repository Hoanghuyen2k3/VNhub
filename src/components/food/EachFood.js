import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { foodAndDestinations } from '../../data'
import Review from '../review/Review';
function EachFood() {
  const params = useParams();
  console.log(params)
  const pl = foodAndDestinations.filter(p => p.id === parseInt(params.id));
  const food = pl[0]
  console.log(food)
  const [image, setImage] = useState()
    const [images, setImages] = useState([])
    const [text, setText] = useState("");

    const [review, setReview] = useState({})
  return (
    <div>
      <h1>{food.name}</h1>
      <div>
        {
          food.url.map(f =><img src={f} alt="food-image" />)
        }
      </div>
      <Review image={image} images={images} setText={setText} text={text} setImage={setImage} setImages={setImages} review={review} setReview={setReview} />

    </div>
  )
}

export default EachFood