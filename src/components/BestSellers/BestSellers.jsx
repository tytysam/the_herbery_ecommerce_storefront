import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./bestSellersStyles.js";

const BestSellers = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      {/* <div className={classes.toolbar} /> */}
      <div className={classes.bestBotanicalsContainer}>
        <Typography variant="h2" className={classes.bestBotanicalsHeader}>
          The Best Botanicals
        </Typography>
        <Grid
          container
          spacing={3}
          className={classes.bestBotanicalsColumnContainer}
        >
          <Grid item sm={4} className={classes.firstColumn}>
            <div className={classes.lowLightImageContainer}></div>
            <Typography variant="h3" className={classes.bestBotanicalsSubtitle}>
              Best For Low-Light
            </Typography>
          </Grid>
          <Grid item sm={4} className={classes.middleColumn}>
            <div className={classes.bestSellersImageContainer}></div>
            <Typography variant="h3" className={classes.bestBotanicalsSubtitle}>
              Best Sellers
            </Typography>
          </Grid>
          <Grid item sm={4} className={classes.thirdColumn}>
            <div className={classes.careFreeImageContainer}></div>
            <Typography variant="h3" className={classes.bestBotanicalsSubtitle}>
              Best for Beginners
            </Typography>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default BestSellers;
