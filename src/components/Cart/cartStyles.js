import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
    marginBottom: "25px",
    fontFamily: "Laviossa",
    fontSize: "3.5rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.5rem",
    },
  },
  emptyCartMessage: {
    fontSize: "1.5rem",
    padding: "25px",
  },
  link: {
    textDecoration: "none",
    color: "#00AB84",
  },
  cartButtonsContainer: {},
  emptyButton: {
    fontFamily: "Laviossa",
    color: "#BB876A",
    backgroundColor: "transparent",
    border: "2px solid #BB876A",
    wordWrap: "none",
    padding: "12px 25px",
    minWidth: "200px",
    "&:hover": {
      backgroundColor: "transparent",
    },

    [theme.breakpoints.down("sm")]: {
      marginRight: "20px",
      marginLeft: "10px",
      marginTop: "10px",
    },
    [theme.breakpoints.only("xs")]: {
      minWidth: "85px",
      maxHeight: "25px",
      width: "125px",

      padding: "5px 10px",
    },
  },
  checkoutButton: {
    fontFamily: "Laviossa",
    color: "#ffffff",
    backgroundColor: "#00AB84",
    border: "2px solid #00AB84",
    padding: "12px 25px",
    marginLeft: "15px",
    minWidth: "200px",
    "&:hover": {
      backgroundColor: "#00AB84",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "20px",
      marginLeft: "10px",
      marginTop: "10px",
    },
    [theme.breakpoints.only("xs")]: {
      minWidth: "85px",
      maxHeight: "25px",
      width: "125px",

      padding: "5px 10px",
    },
  },
  circularProgress: {
    position: "absolute",
    top: "50%",
    margin: "0 aut0",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "90%",
    justifyContent: "space-between",
  },
  subtotal: {
    fontFamily: "Laviossa",
    fontSize: "2.5rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "2rem",
    },
  },
  spacerDiv: {
    height: "50px",
  },
}));
