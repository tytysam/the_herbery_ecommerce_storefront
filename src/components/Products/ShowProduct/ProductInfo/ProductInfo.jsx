import React from "react";
import { Grid, Typography, Divider, Button, Box } from "@material-ui/core";
import useStyles from "./productInfoStyles.js";

const ProductInfo = ({ currentProduct, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.productInfoContainer}>
      {/* <Typography variant="subtitle1">{currentProduct.categories...}</Typography> */}
      <Box mt={1}>
        <Typography variant="h4" className={classes.productName}>
          {currentProduct.name}
        </Typography>
        <br />
      </Box>
      <Box mt={1} className={classes.purchaseOptionsContainer}>
        <Typography variant="h5" className={classes.productPrice}>
          {currentProduct.price
            ? currentProduct.price.formatted_with_symbol
            : ""}
        </Typography>
        <Button
          variant="contained"
          className={classes.addProductToCartButton}
          onClick={() => onAddToCart(currentProduct.id, 1)}
        >
          Add to Bag
        </Button>
      </Box>

      <Divider className={classes.productInfoDivider} />
      <Box mt={1} className={classes.productDescriptionHtmlContainer}>
        <Typography
          variant="body1"
          className={classes.productDescriptionHtml}
          dangerouslySetInnerHTML={{ __html: currentProduct.description }}
        />
      </Box>
    </Grid>
  );
};

export default ProductInfo;
