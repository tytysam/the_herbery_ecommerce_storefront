import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../assets/images/the-herbery_hero-image.jpg";

export default makeStyles((theme) => ({
  heroContainer: {
    minHeight: "85vh",
    width: "90%",
    backgroundColor: "#ffffff",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0 auto",
    marginTop: "64px",
    minWidth: "450px",
    maxWidth: "1300px",

    [theme.breakpoints.only("sm")]: {
      minHeight: "75vh",
    },
    [theme.breakpoints.only("xs")]: {
      minHeight: "65vh",
      minWidth: "250px",
    },
  },
  heroTextContainer: {
    paddingTop: "45px",
    marginLeft: "65px",

    [theme.breakpoints.only("sm")]: {
      marginLeft: "45px",
      paddingTop: "55px",
    },
    [theme.breakpoints.only("xs")]: {
      marginLeft: "25px",
      paddingTop: "45px",
    },
  },
  heroText: {
    fontFamily: "Laviossa",
    color: "#F6D3BB",
    textShadow: "3px 1px 1px rgba(0, 0, 0, 0.3)",
    fontSize: "5.5rem",

    [theme.breakpoints.only("sm")]: {
      fontSize: "4.5rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "2.75rem",
    },
  },
  heroButton: {
    margin: "35px 0 0 75px",
    padding: "12px 45px",
    fontFamily: "Laviossa",
    color: "rgba(0, 0, 0, 0.3)",
    backgroundColor: "#F6D3BB",
    border: "2px solid #F6D3BB",
    borderRadius: "8px",
    boxShadow: "3px 3px 1px rgba(0, 0, 0, 0.2)",
    letterSpacing: "6px",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#F6D3BB",
      // border: "2px solid #ffffff",
      boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.4)",
    },

    [theme.breakpoints.only("sm")]: {
      padding: "12px 45px",
      margin: "25px 0 0 60px",
    },
    [theme.breakpoints.only("xs")]: {
      padding: "12px 25px",
      margin: "25px 0 0 38px",
    },
  },
}));
