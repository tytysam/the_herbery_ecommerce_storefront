import React from "react";

const MainImage = ({ images, selectedImage }) => {
  return (
    <div>
      <img
        src={images ? images[selectedImage].url : "Loading images..."}
        alt={images ? images[selectedImage].filename : "Loading images..."}
        height="500"
      />
    </div>
  );
};

export default MainImage;
