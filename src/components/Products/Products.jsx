import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./productsStyles.js";
import Product from "./Product/Product.jsx";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content} id="products-grid">
      <div className={classes.toolbar} />
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
