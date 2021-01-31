import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Typography,
  IconButton,
} from "@material-ui/core";

import { commerce } from "../../../lib/commerce.js";
import useStyles from "./styles.js";

const ShowProduct = (props) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const classes = useStyles();
  const permalink = props.routerProps.match.params.permalink;
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
    <Container>
      {currentProduct ? (
        <Card gutterBottom>
          <CardMedia
            className={classes.media}
            image={currentProduct.assets ? currentProduct.assets[0].url : ""}
            title={currentProduct.name}
          />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography variant="h5" gutterbottom="true">
                {currentProduct.name}
              </Typography>
              <Typography variant="h5">
                {currentProduct.price
                  ? currentProduct.price.formatted_with_symbol
                  : ""}
              </Typography>
            </div>
            <Typography
              dangerouslySetInnerHTML={{ __html: currentProduct.description }}
              variant="body2"
              color="textSecondary"
            />
          </CardContent>
        </Card>
      ) : (
        <div variant="h4">This product no longer exists...</div>
      )}
    </Container>
    // <>
    // </>
  );
};

export default ShowProduct;
