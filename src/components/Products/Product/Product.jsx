import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { LocalMall } from "@material-ui/icons/";

import useStyles from "./productStyles.js";

const Product = ({ product, onAddToCart }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component={Link}
        to={`/plants/${product.permalink}`}
        className={classes.media}
        image={product.assets ? product.assets[currentImage].url : "..."}
        onMouseEnter={() => {
          setCurrentImage(1);
        }}
        onMouseOut={() => {
          setCurrentImage(0);
        }}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography
            component={Link}
            to={`/plants/${product.permalink}`}
            variant="h5"
            className={classes.productName}
          >
            {product.name}
          </Typography>
          <Typography variant="h5" className={classes.productPrice}>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          className={classes.addToCartButton}
          onClick={() => onAddToCart(product.id, 1)}
        >
          Add to Bag <LocalMall className={classes.shoppingBagIcon} />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
