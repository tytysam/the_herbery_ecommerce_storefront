import React from "react";
import { Grid, Typography, Divider, Button, Box } from "@material-ui/core";

const ProductInfo = ({ currentProduct, onAddToCart }) => {
  return (
    <Grid container direction="column" style={{ height: "100%" }}>
      {/* <Typography variant="subtitle1">{currentProduct.categories...}</Typography> */}
      <Box mt={2}>
        <Typography variant="h4">{currentProduct.name}</Typography>
        <Divider />
        <Typography
          variant="subtitle1"
          dangerouslySetInnerHTML={{ __html: currentProduct.description }}
        />
        <Typography variant="h5">
          {currentProduct.price
            ? currentProduct.price.formatted_with_symbol
            : ""}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "auto" }}
        onClick={() => onAddToCart(currentProduct.id, 1)}
      >
        Add to Cart
      </Button>
    </Grid>
  );
};

export default ProductInfo;
