import React from "react";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./productsStyles.js";
import Product from "./Product/Product.jsx";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Typography
        variant="h2"
        className={classes.allPlantsHeader}
        id="products-grid"
      >
        All Plants
      </Typography>
      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.gridContainer}
      >
        {products.map(
          (product) => (
            console.log(product),
            (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            )
          )
        )}
      </Grid>
    </main>
  );
};

export default Products;
