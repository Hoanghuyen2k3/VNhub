import React from 'react'
import { FaImage } from "react-icons/fa";
import "./Review.scss"
function Review({image, images,text, setText, setImage, setImages, setReview, review}) {
    const handleImages=(e)=>{
        if(images.length>2){
            return images
        }
        setImages(images =>[...images, image])
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setReview(review=>[{
            date: new Date(),
            text: text,
            images: [image,...images],


        }, ...review])
        setImages([])
        setImage("")
    }
  return (
    <div className="review-container">
         <form onSubmit={handleSubmit}>
            <div className="form">
                <textarea type="text" onChange={(e)=>setText(e.target.value)} placeholder="Write your experiences..."/>
                <button type="submit">Submit</button>
                    
            </div>
            <div className="preview-container">
                <div className="input-preview">
                   
                    <input  style={{ display: 'none' }} id="icon-button-file"
                type="file" onChange={(e)=>{
                    const file = e.target.files[0];
                    file &&setImage(URL.createObjectURL(e.target.files[0]))
                    }} />
                    {image ? 
                    <>
                        <label className="icon" htmlFor='icon-button-file' onClick={handleImages}>+</label>
                        <img src={image} alt="img" />
                    </> :  <label htmlFor='icon-button-file'><FaImage className="icon" /></label>}

                </div>
             
                <div className="preview">
                    {images.map((image, index) =>
                    <img src={image}  />

                    )}

                </div>
               

            </div>
            
            
        </form>
        {review? review.map((review, index) =>
        <div className="your-review">
            <p>{review.text}</p>
            <p className="time">{review.date?.toLocaleString()}</p>
            <div className="imgs">
                {
                    review.images?.map(image=><img src={image} />)
                }
            </div>
            

        </div>):<></>}
    </div>
  )
}

export default Review