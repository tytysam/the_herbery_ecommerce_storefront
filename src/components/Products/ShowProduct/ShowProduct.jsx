import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import ImageGrid from "./ImageGrid/ImageGrid.jsx";
import MainImage from "./MainImage/MainImage.jsx";
import ProductInfo from "./ProductInfo/ProductInfo.jsx";
import RelatedProducts from "./RelatedProducts/RelatedProducts.jsx";

import { commerce } from "../../../lib/commerce.js";
import useStyles from "./showProductStyles.js";

const ShowProduct = ({ routerProps, onAddToCart }) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [selectedImage, setSelectedImage] = useState(0);
  const classes = useStyles();
  const permalink = routerProps.match.params.permalink;
  let fetchedProduct = {};

  const fetchCurrentProduct = async () => {
    fetchedProduct = await commerce.products.retrieve(permalink, {
      type: "permalink",
    });

    console.log(fetchedProduct);
    setCurrentProduct(fetchedProduct);
  };

  useEffect(() => {
    fetchCurrentProduct();
  }, []);

  console.log(currentProduct);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Grid container spacing={3} className={classes.productContainer}>
          <Grid item md={1}>
            <ImageGrid
              images={currentProduct.assets}
              onSelect={setSelectedImage}
              selectedImage={selectedImage}
            />
          </Grid>
          <Grid item lg={5}>
            <MainImage
              images={currentProduct.assets}
              selectedImage={selectedImage}
            />
          </Grid>
          <Grid item md={5}>
            <ProductInfo
              currentProduct={currentProduct}
              onAddToCart={onAddToCart}
            />
          </Grid>
        </Grid>
      </div>
      <RelatedProducts currentProduct={currentProduct} />
    </main>
  );
};

export default ShowProduct;
