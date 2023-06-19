import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Albums() {
  let { id } = useParams();

  const [album, setAlbum] = useState({}); 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(data => data.json())
      .then(json => setAlbum(json));
  }, []); 

  return (
    <div style={{display: 'flex', margin: '40px'}}>
    <div>
      <h2>{album.title}</h2>
    </div>
  </div>
);

}

export default Albums;