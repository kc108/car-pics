import React from "react";

const ImageList = (props) => {
  //   console.log(props.images);
  const images = props.images.map(({ description, id, urls }) => {
    // add key={image.id} to uniquely identify List Record in React
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
