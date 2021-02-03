import { makeStyles } from "@material-ui/core/styles";
import plantIllustration from "../../assets/images/plants_00AB84.svg";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  pageNotFoundContentContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    margin: "0 auto",
    marginTop: "64px",
    minWidth: "450px",
    maxWidth: "1300px",
    [theme.breakpoints.only("xs")]: {
      minWidth: "300px",
      maxWidth: "350px",
    },
  },
  pageNotFoundText: {
    fontFamily: "Laviossa",
    fontSize: "1.5rem",
  },
  returnHomeLink: {
    fontFamily: "Laviossa",
    fontSize: "1.5rem",
    display: "flex",
    margin: "50px auto",
    alignItems: "center",

    [theme.breakpoints.up("sm")]: {},
  },
  link: {
    textDecoration: "none",
    color: "#00AB84",
    paddingLeft: "10px",
    fontSize: "2.7rem",
    "&:hover": {
      textDecoration: "underline",
    },
    // [theme.breakpoints.only("xs")]: {
    //   fontSize: "1.5rem",
    //   paddingLeft: "0",
    // },
  },
  illustrationContainer: {
    backgroundImage: `url(${plantIllustration})`,
    height: "75vh",
    backgroundColor: "#ffffff",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0 auto",
    marginTop: "64px",
    minWidth: "450px",
    maxWidth: "1300px",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      minWidth: "300px",
      maxWidth: "350px",
    },
  },
  illustration: {},
  spacerDiv: {
    height: "50px",
  },
}));
