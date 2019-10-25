import React from 'react';

function ImageComponent(props) {

  return (
    <img src={props.url} alt={props.title}/>
  )
}

export default ImageComponent;