import React from "react";
import useStyles from "./mainImageStyles.js";

const MainImage = ({ images, selectedImage }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainProductImageContainer}>
      <img
        src={images ? images[selectedImage].url : ""}
        alt={images ? images[selectedImage].filename : ""}
        className={classes.mainProductImage}
      />
    </div>
  );
};

export default MainImage;
