import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Typography } from "@material-ui/core";
import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";

import useStyles from "./footerStyles.js";
import logo from "../../assets/images/The-Herbery_wordmark_Terracotta.svg";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.content}>
      {/* <div className={classes.toolbar} /> */}
      <Grid container spacing={1} className={classes.footerColumnContainer}>
        <Grid item sm={4} md={4} lg={4} className={classes.firstColumn}>
          <Typography component={Link} to="/" className={classes.footerTitle}>
            <img src={logo} alt="The Herbery" height="25px" />
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className={classes.middleColumn}
        >
          <Typography component={Link} to="#">
            <Facebook className={classes.footerSocialIcon} />
          </Typography>
          <Typography component={Link} to="#">
            <Instagram className={classes.footerSocialIcon} />
          </Typography>
          <Typography component={Link} to="#">
            <Pinterest className={classes.footerSocialIcon} />
          </Typography>
          <Typography component={Link} to="#">
            <Twitter className={classes.footerSocialIcon} />
          </Typography>
        </Grid>
        <Grid item sm={4} md={4} lg={4} className={classes.thirdColumn}>
          <Typography component={Link} to="#" className={classes.footerNav}>
            About
          </Typography>
          <Typography component={Link} to="#" className={classes.footerNav}>
            Shop
          </Typography>
          <Typography component={Link} to="/cart" className={classes.footerNav}>
            Cart
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
