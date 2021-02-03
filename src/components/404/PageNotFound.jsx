import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./pageNotFoundStyles.js";

const PageNotFound = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar}></div>
      <div className={classes.pageNotFoundContentContainer}>
        <Typography variant="h2" className={classes.pageNotFoundText}>
          404 Error | Page Not Found
        </Typography>
        <br />
        <Typography variant="h2" className={classes.pageNotFoundText}>
          Uh oh... Roots can get messy. This page must no longer exist!
        </Typography>
        <Typography variant="h2" className={classes.returnHomeLink}>
          Return to the shop by clicking
          <Link to="/" className={classes.link}>
            {" "}
            here.
          </Link>
        </Typography>
        <div className={classes.illustrationContainer}></div>
        <div className={classes.spacerDiv} />
      </div>
    </>
  );
};

export default PageNotFound;
