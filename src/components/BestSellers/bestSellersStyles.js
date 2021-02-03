import { makeStyles } from "@material-ui/core/styles";

import lowLight from "../../assets/images/multipurpose-plant-pic_1.jpg";
import bestSellers from "../../assets/images/multipurpose-plant-pic_2.jpg";
import easyCare from "../../assets/images/multipurpose-plant-pic_3.jpg";

// Still getting used to the JS-formatted CSS that Material UI requires...

export default makeStyles((theme) => ({
  root: {
    maxWidth: "75%",
    margin: "0 auto",
  },
  toolbar: theme.mixins.toolbar,
  bestBotanicalsContainer: {
    backgroundColor: "#ffffff",

    marginTop: 100,
  },
  bestBotanicalsHeader: {
    fontFamily: "Laviossa",
    fontSize: "3rem",
    textAlign: "center",
  },
  bestBotanicalsColumnContainer: {
    margin: "0 auto",
    width: "90%",
    backgroundColor: "#ffffff",
    marginTop: "20px",
    textAlign: "center",

    maxWidth: "1300px",
    [theme.breakpoints.only("xs")]: {
      minWidth: "300px",
      maxWidth: "375px",
    },
  },
  bestBotanicalsSubtitle: {
    fontFamily: "Laviossa",
    fontSize: "1.6rem",
    textAlign: "center",
    paddingTop: "15px",
    color: "#3D3833",
    "&:hover": {
      color: "#00AB84",
    },
  },
  firstColumn: { textDecoration: "none" },
  lowLightImageContainer: {
    backgroundImage: `url(${lowLight})`,
    minHeight: "350px",
    width: "100%",

    backgroundColor: "#ffffff",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  middleColumn: {
    textDecoration: "none",

    [theme.breakpoints.only("xs")]: {
      marginTop: "20px",
    },
  },
  bestSellersImageContainer: {
    backgroundImage: `url(${bestSellers})`,
    minHeight: "450px",
    width: "100%",

    backgroundColor: "#ffffff",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.only("xs")]: {
      minHeight: "350px",
      width: "275px",
    },
  },
  thirdColumn: {
    textDecoration: "none",

    [theme.breakpoints.only("xs")]: {
      marginTop: "20px",
    },
  },
  careFreeImageContainer: {
    backgroundImage: `url(${easyCare})`,
    minHeight: "350px",
    width: "100%",

    backgroundColor: "#ffffff",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.only("xs")]: {
      marginTop: "20px",
    },
  },
}));
