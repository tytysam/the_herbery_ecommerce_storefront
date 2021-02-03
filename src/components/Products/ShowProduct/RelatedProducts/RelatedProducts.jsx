import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";

import useStyles from "./relatedProductsStyles.js";

const RelatedProducts = ({ currentProduct }) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <div className={classes.toolbar} />
      {currentProduct &&
      currentProduct.related_products &&
      currentProduct.related_products.length ? (
        <div className={classes.relatedProductsContainer}>
          <Typography variant="h2" className={classes.relatedProductsHeader}>
            Similar Plants
          </Typography>
          <Grid
            container
            spacing={3}
            className={classes.relatedProductsColumnContainer}
          >
            <Grid item sm={4} className={classes.firstColumn}>
              <Card className={classes.relatedProductCard}>
                <CardMedia
                  component={Link}
                  to={`/plants/${currentProduct.related_products[0].permalink}`}
                  target="_blank"
                  className={classes.relatedProductImage}
                  image={
                    currentProduct.related_products[0].media.source
                      ? currentProduct.related_products[0].media.source
                      : "..."
                  }
                  title={currentProduct.related_products[0].name}
                />
                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography
                      component={Link}
                      to={`/plants/${currentProduct.related_products[0].permalink}`}
                      target="_blank"
                      variant="h5"
                      className={classes.relatedProductName}
                    >
                      {currentProduct.related_products[0].name}
                    </Typography>
                    <Typography
                      variant="h5"
                      className={classes.relatedProductPrice}
                    >
                      {
                        currentProduct.related_products[0].price
                          .formatted_with_symbol
                      }
                    </Typography>
                  </div>
                </CardContent>
                {/* <CardActions disableSpacing className={classes.cardActions}>
                  <Button
                    variant="contained"
                    className={classes.addToCartButton}
                    onClick={() => onAddToCart(product.id, 1)}
                  >
                    Add to Bag <LocalMall className={classes.shoppingBagIcon} />
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item sm={4} className={classes.middleColumn}>
              <Card className={classes.relatedProductCard}>
                <CardMedia
                  component={Link}
                  to={`/plants/${currentProduct.related_products[1].permalink}`}
                  target="_blank"
                  className={classes.relatedProductImage}
                  image={
                    currentProduct.related_products[1].media.source
                      ? currentProduct.related_products[1].media.source
                      : "..."
                  }
                  title={currentProduct.related_products[1].name}
                />
                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography
                      component={Link}
                      to={`/plants/${currentProduct.related_products[1].permalink}`}
                      target="_blank"
                      variant="h5"
                      className={classes.relatedProductName}
                    >
                      {currentProduct.related_products[1].name}
                    </Typography>
                    <Typography
                      variant="h5"
                      className={classes.relatedProductPrice}
                    >
                      {
                        currentProduct.related_products[1].price
                          .formatted_with_symbol
                      }
                    </Typography>
                  </div>
                </CardContent>
                {/* <CardActions disableSpacing className={classes.cardActions}>
                  <Button
                    variant="contained"
                    className={classes.addToCartButton}
                    onClick={() => onAddToCart(product.id, 1)}
                  >
                    Add to Bag <LocalMall className={classes.shoppingBagIcon} />
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
            <Grid item sm={4} className={classes.thirdColumn}>
              <Card className={classes.relatedProductCard}>
                <CardMedia
                  component={Link}
                  to={`/plants/${currentProduct.related_products[2].permalink}`}
                  target="_blank"
                  className={classes.relatedProductImage}
                  image={
                    currentProduct.related_products[2].media.source
                      ? currentProduct.related_products[2].media.source
                      : "..."
                  }
                  title={currentProduct.related_products[2].name}
                />
                <CardContent>
                  <div className={classes.cardContent}>
                    <Typography
                      component={Link}
                      to={`/plants/${currentProduct.related_products[2].permalink}`}
                      target="_blank"
                      variant="h5"
                      className={classes.relatedProductName}
                    >
                      {currentProduct.related_products[2].name}
                    </Typography>
                    <Typography
                      variant="h5"
                      className={classes.relatedProductPrice}
                    >
                      {
                        currentProduct.related_products[2].price
                          .formatted_with_symbol
                      }
                    </Typography>
                  </div>
                </CardContent>
                {/* <CardActions disableSpacing className={classes.cardActions}>
                  <Button
                    variant="contained"
                    className={classes.addToCartButton}
                    onClick={() => onAddToCart(product.id, 1)}
                  >
                    Add to Bag <LocalMall className={classes.shoppingBagIcon} />
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          </Grid>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default RelatedProducts;
