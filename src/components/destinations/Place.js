import React from 'react'
import { placesToVisit } from '../../data'
import { useParams } from 'react-router-dom'
function Place() {
    const params = useParams();
    console.log(params)
    const index = parseInt(params.index);
    const place = placesToVisit[index];
  return (
    <div>
        <div>
            <a href="#description" >Description</a>
            <a href="#about">About</a>
            <a href="#img">Images</a>
            <a href="#todo">Things to do</a>
        </div>
        <div>
            <div><img width={100} src={place.url[0]} /></div>
            <h1>{place.name}</h1>
            <h2 id="description">Desccription</h2>
            <p>{place.description}</p>
            <h2 id="about">About</h2>
            <textarea readOnly value={place.moreInfo}></textarea>
            <h2 id="img">Images</h2>
            <h2 id="todo">Things to do</h2>
            <ul>
                {place.thingsToDo.map((d, i)=> <li key={i}>{d}</li>)}
            </ul>
            
        </div>
        
    </div>
  )
}

export default Place