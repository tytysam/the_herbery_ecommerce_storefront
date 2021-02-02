import React from "react";
import { Button, Typography } from "@material-ui/core";

import useStyles from "./heroStyles.js";

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContainer}>
        <div className={classes.heroTextContainer}>
          <Typography variant="h2" className={classes.heroText}>
            Grow <br />
            More <br />
            Happiness
          </Typography>
        </div>
        <Button
          href="#products-grid"
          variant="contained"
          className={classes.heroButton}
        >
          Shop Plants
        </Button>
      </div>
    </>
  );
};

export default Hero;
