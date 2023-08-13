import React from 'react'
import { FaImage } from "react-icons/fa";

function Review({image, images,text, setText, setImage, setImages, setReview, review}) {
    const handleImages=(e)=>{
        setImages(images =>[...images, image])
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setReview({
            date: new Date(),
            text: text,
            images: images,


        })
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Write your experiences..."/>
            <label htmlFor='icon-button-file'><FaImage /></label>
            <input  style={{ display: 'none' }} id="icon-button-file"
        type="file" onChange={(e)=>{
            const file = e.target.files[0];
            file &&setImage(URL.createObjectURL(e.target.files[0]))}} />
            {image && 
            <>
                <label htmlFor='icon-button-file' onClick={handleImages}>+</label>
                <img src={image} />
            </>}
            {images.map((image, index) =>
                <img src={image} />

            )}
            <button type="submit">Submit</button>
        </form>
        {review&&
        <div>
            <p>{review.text}</p>
            <p>{review.date?.toLocaleString()}</p>
            <div>
                {
                    review.images?.map(image=><img src={image} />)
                }
            </div>
            

        </div>}
    </div>
  )
}

export default Review