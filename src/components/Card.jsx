import React from 'react';
import rozes from './image/rozes.jpg';
import './Cardcss.css';

function Card(){
    const album = 
      {
        group: "Rozes",
        title: "Under the Grave",
        year: "(2016)",
      }
      
    
 
  return(
    <figure className="mainCard">
       <figcaption>   
       <img src={rozes} alt="rozes" />
    <div className="description">
    <h1>{album.group}</h1>
    <p>{album.title}</p>
    <p class="year">{album.year}</p>
    
    </div>
    
    <div className="note">

    <p>Rate this album</p>
    <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
  
  
    </div>
    </figcaption>
    </figure>

  )
}




export default Card;