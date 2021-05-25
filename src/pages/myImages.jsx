import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {key} from './upload';


const MyImages = () => {
  const [images, setImages] = React.useState([]);

  const url = "https://api.thecatapi.com/v1/images?limit=100";
  const urlRemove = 'https://api.thecatapi.com/v1/images/';

  const getData = () => {
    fetch(url, {
      headers: {
        'x-api-key': key 
      }
    })
    .then((result) => result.json())
    .then((result) => {
      console.log(result);
      setImages(result);
      //setImages((currentImage) => [...currentImage, result]);
      //setImages([...result]);
    })
  }


  const deletePhoto = (id) => {
    fetch(`${urlRemove}${id}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': key 
      }
    })
    .then(() => getData())
    .catch((e) => {console.log(e)})
    
  }

  React.useEffect(() =>{
    getData();
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row w-75 d-flex">
        <Carousel>
          {images.map((image) => (
            <div key={image.id}>
              <img className="" src={image.url} alt="" />
              <button className="legend" onClick={() => deletePhoto(image.id)}>Delete</button>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MyImages;
