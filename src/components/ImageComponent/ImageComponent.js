import React from 'react';
import { tsPropertySignature } from '@babel/types';

function ImageComponent(props) {

  return (
    <img src={props.url} alt={props.title}/>
  )
}

export default ImageComponent;