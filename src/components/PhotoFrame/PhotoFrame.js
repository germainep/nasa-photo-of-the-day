import React, {useState, useEffect} from 'react';
import './photoframe.css';
import ImageComponent from '../ImageComponent/ImageComponent';
import TitleComponent from '../TitleComponent/TitleComponent';
import axios from 'axios';
import SummaryComponent from '../SummaryComponent/SummaryComponent';

function PhotoFrame() {

  const [apod, setApod] = useState({});


  // const apodData = axios("https://api.nasa.gov/planetary/apod?api_key=9hiDJIECgdU4DEkNPLPB4vSWcLxP2hKEdw0WRVSE")
  // .then((response)=>response.data)
  // .catch(error => console.error(error))

useEffect(()=> {
  async function fetchData() {
    try {
      const apodData = await axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=m35R6A8jtnOqcQWxNy62cGiC0S3EyAsAKYmk29Bq"
      );
      console.log(apodData.data);
      setApod(apodData.data);
    } catch(err) {
      console.error(err);
    }
  }
  fetchData();

  return () => apod
    
},[apod])
  return(
    <div className='container'>
      <TitleComponent title={apod.title}/>
      <ImageComponent url={apod.hdurl} title={apod.title}/>
      <SummaryComponent summary={apod.explanation}/>
    </div>
  )
}

export default PhotoFrame;