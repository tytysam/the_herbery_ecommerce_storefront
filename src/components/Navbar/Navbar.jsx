import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/images/The-Herbery_wordmark_Succulent.svg";
import useStyles from "./navbarStyles.js";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.appbarWrapper}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            <img
              src={logo}
              alt="The Herbery"
              height="45px"
              className={classes.wordmark}
            />
          </Typography>
          {/* <Typography
            component={Link}
            to="/about"
            variant="h6"
            className={classes.title}
            color="primary"
          >
            About
          </Typography> */}
          {/* <Typography
            component={Link}
            to="/products"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <h1>Shop</h1>
          </Typography> */}
          <div className={classes.grow} />
          {location.pathname !== "/cart" &&
          location.pathname !== "/checkout" ? (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
