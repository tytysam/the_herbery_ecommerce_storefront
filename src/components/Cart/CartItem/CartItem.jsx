import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./cartItemStyles.js";

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQuantity }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardContentContainer}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" className={classes.productName}>
          {item.name}
        </Typography>
        <Typography variant="h5" className={classes.productPrice}>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.buttons}>
          {/*  DECREMENT Button */}
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          {/*  INCREMENT Button */}
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
          <Button
            variant="text"
            type="button"
            className={classes.removeProductButton}
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
