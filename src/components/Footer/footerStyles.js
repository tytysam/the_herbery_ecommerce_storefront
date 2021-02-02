import { makeStyles } from "@material-ui/core/styles";

// Still getting used to the JS-formatted CSS that Material UI requires...

export default makeStyles((theme) => ({
  root: {},
  content: {
    maxWidth: "80%",
    height: "175px",
    position: "static",
    bottom: "0",
    margin: "0 auto",
    marginTop: "50px",
    backgroundColor: "#F6D3BB",
    color: "#BB876A",
    // flexGrow: 1,
    [theme.breakpoints.only("xs")]: {
      height: "250px",
    },
  },
  footerTitle: {
    flexGrow: 1,
    maxWidth: "175px",
  },
  toolbar: theme.mixins.toolbar,
  footerColumnContainer: {
    maxWidth: 1200,
    margin: "0 auto",
    // marginTop: "20px",
    paddingTop: "40px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  firstColumn: {
    // marginLeft: "15px",
  },
  middleColumn: {},
  footerSocialIcon: {
    margin: "2px 8px 2px 8px",
    color: "#BB876A",
    "&:hover": {
      color: "#00AB84",
    },
  },
  thirdColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  footerNav: {
    fontFamily: "Laviossa",
    margin: "5px auto",
    color: "#BB876A",
    textDecoration: "none",
    "&:hover": {
      color: "#00AB84",
    },
  },
}));
