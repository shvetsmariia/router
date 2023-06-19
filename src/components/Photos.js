import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Photos() {
  let { id } = useParams();

  const [photo, setPhoto] = useState({}); 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(data => data.json())
      .then(json => setPhoto(json));
  }, []); 

  return (
    <div style={{display: 'flex', margin: '40px'}}>
    <div>
      <h2>{photo.url}</h2>
      <h2>
        <a href={photo.url} target="_blank" rel="noreferrer">
        <img src={photo.url} alt={photo.url}></img>
        </a>
      </h2>
    </div>
  </div>
);
}

export default Photos;