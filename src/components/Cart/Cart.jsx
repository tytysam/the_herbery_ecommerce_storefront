import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import CartItem from "./CartItem/CartItem.jsx";
import { Link } from "react-router-dom";

import useStyles from "./cartStyles.js";

const Cart = ({
  cart,
  handleUpdateCartQuantity,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1" className={classes.emptyCartMessage}>
      You have no items in your shopping cart — try exploring{" "}
      <Link to="/" className={classes.link}>
        the shop!
      </Link>
      {/* *** to-do: add categories banner component HERE */}
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item md={12} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4" className={classes.subtotal}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div className={classes.cartButtonsContainer}>
          <Button
            className={classes.emptyButton}
            type="button"
            variant="contained"
            onClick={handleEmptyCart}
          >
            Empty Bag
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            type="button"
            variant="contained"
          >
            Checkout
          </Button>
        </div>
      </div>
      <div className={classes.spacerDiv} />
    </>
  );

  // error - check
  if (!cart.line_items)
    return <CircularProgress className={classes.circularProgress} />;

  return (
    <Container>
      <div className={classes.toolbar} />
      {/* self-closing div pushes content down so not obscured by navbar | material ui */}
      <Typography className={classes.title} variant="h3" gutterBottom>
        Shopping Bag
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
