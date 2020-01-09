import React from 'react';
import {CardImg} from 'reactstrap'

function ImageComponent(props) {

  return (
    <CardImg src={props.url} alt={props.title}/>
  )
}

export default ImageComponent;