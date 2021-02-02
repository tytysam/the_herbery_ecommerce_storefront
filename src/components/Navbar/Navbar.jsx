import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Badge,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { LocalMall } from "@material-ui/icons/";
import logo from "../../assets/images/The-Herbery_wordmark_Succulent.svg";
import useStyles from "./navbarStyles.js";

const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = ({ totalItems, props }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
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
                  className={classes.cartIconButton}
                >
                  <Badge
                    badgeContent={totalItems}
                    className={classes.cartIconBadge}
                  >
                    <LocalMall className={classes.cartIcon} />
                  </Badge>
                </IconButton>
              </div>
            ) : (
              ""
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Navbar;
