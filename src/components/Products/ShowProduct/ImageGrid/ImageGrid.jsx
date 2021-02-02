import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

const ImageGrid = ({ images, onSelect, selectedImage }) => {
  return (
    <Grid container>
      {images ? (
        images.map((image, index) => (
          <img
            src={image.url}
            height={100}
            onClick={() => onSelect(index)}
            key={image.id}
            alt={image.filename}
            style={{
              border:
                index === selectedImage
                  ? "solid 1px #202020"
                  : "solid 1px #ffffff",
              cursor: "pointer",
              marginBottom: "5px",
              marginRight: "5px",
            }}
          />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </Grid>
  );
};

export default ImageGrid;
