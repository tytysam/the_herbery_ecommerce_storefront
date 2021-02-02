import React from "react";
import { Grid } from "@material-ui/core";

const ImageGrid = ({ images, onSelect, selectedImage }) => {
  return (
    <Grid container direction="column">
      {images ? (
        images.map((image, index) => (
          <img
            src={image.url}
            height={100}
            onClick={() => onSelect(index)}
            alt={image.filename}
            style={{
              border:
                index === selectedImage
                  ? "solid 1px #202020"
                  : "solid 1px white",
              cursor: "pointer",
            }}
          />
        ))
      ) : (
        <div> Loading images...</div>
      )}
    </Grid>
  );
};

export default ImageGrid;
