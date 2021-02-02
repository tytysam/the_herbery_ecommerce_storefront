import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@material-ui/core";
import ImageGrid from "./ImageGrid/ImageGrid.jsx";
import MainImage from "./MainImage/MainImage.jsx";
import ProductInfo from "./ProductInfo/ProductInfo.jsx";

import { commerce } from "../../../lib/commerce.js";
import useStyles from "./styles.js";

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

  // useEffect(() => [setCurrentProduct(fetchedProduct)], [fetchedProduct]);

  console.log(currentProduct);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Grid
          container
          spacing={1}
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          <Grid item sm={1}>
            <ImageGrid
              images={currentProduct.assets}
              onSelect={setSelectedImage}
              selectedImage={selectedImage}
            />
          </Grid>
          <Grid item sm={5}>
            <MainImage
              images={currentProduct.assets}
              selectedImage={selectedImage}
            />
          </Grid>
          <Grid item sm={6}>
            <ProductInfo
              currentProduct={currentProduct}
              onAddToCart={onAddToCart}
            />
          </Grid>
        </Grid>
      </div>
    </main>
    // <Container>
    //   {currentProduct ? (
    //     <Card gutterBottom>
    //       <CardMedia
    //         className={classes.media}
    //         image={currentProduct.assets ? currentProduct.assets[0].url : ""}
    //         title={currentProduct.name}
    //       />
    //       <CardContent>
    //         <div className={classes.cardContent}>
    //           <Typography variant="h5" gutterbottom="true">
    //             {currentProduct.name}
    //           </Typography>
    //           <Typography variant="h5">
    //             {currentProduct.price
    //               ? currentProduct.price.formatted_with_symbol
    //               : ""}
    //           </Typography>
    //         </div>
    //         <Typography
    //           dangerouslySetInnerHTML={{ __html: currentProduct.description }}
    //           variant="body2"
    //           color="textSecondary"
    //         />
    //       </CardContent>
    //     </Card>
    //   ) : (
    //     <div variant="h4">This product no longer exists...</div>
    //   )}
    // </Container>
  );
};

export default ShowProduct;
