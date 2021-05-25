import React from "react";
import {key} from './upload';

const images = {
  limit: "3",
  category: "1"
}

const PublicImages = () => {

  const [category, setCategory] = React.useState([]);
  // const [limit, setLimit] = React.useState(10);
  const [receivedImages, setReceivedImages] =React.useState([]);
  const [imageRender, setImageRender] = React.useState(images)
  const numberOfImages = [3, 9, 15];

  const publicImagesUrl = 'https://api.thecatapi.com/v1/images/search';

  const categoryUrl = 'https://api.thecatapi.com/v1/categories';

  const getPublicImages = (imageRender) => {
    fetch(`${publicImagesUrl}?category_ids=${imageRender.category}&limit=${imageRender.limit}`)
    .then((result) => result.json())
    .then((result) => setReceivedImages(result))
    .catch((e) => console.log(e));
  }


  const getCategories = () => {
    fetch(categoryUrl)
    .then((result) => result.json())
    .then((result) => setCategory(result))
    .catch((e) => console.log(e));
  }

  const categoryHandler = (e) => {
    e.persist();
    setImageRender((currentObj) => {
      return { ...currentObj, [e.target.id]: e.target.value}
    })
    getPublicImages(imageRender);
    console.log(imageRender);
  }

  const numberOfImagesHandler = (limit) => {
    getPublicImages(limit);
  }

  React.useEffect(() => {
    getPublicImages(imageRender);
    getCategories();
  }, [])

  return (
    <> 
      <select id="category" value={imageRender.category} onChange={categoryHandler}>
        {category.map((cat) => (
          <option value={cat.id}>{cat.name}</option>
        ))
        }
      </select> 
      <select id="limit" value={imageRender.limit} onChange={categoryHandler}>
        {numberOfImages.map((num) => (
          <option value={num}>{num}</option>
        ))
        }
      </select> 

      {receivedImages.map(image) => (
        <img src={image.url} alt={image.id} />
      )}
    </>  
  );
};

export default PublicImages;
