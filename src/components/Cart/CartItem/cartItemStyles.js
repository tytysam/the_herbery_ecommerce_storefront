import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cardContentContainer: {
    width: "300px",
    margin: "15px 15px",
    borderRadius: "8px 8px 8px 8px",
    // marginBottom: "50px",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      minWidth: "90%",
    },
  },
  media: {
    minWidth: "150px",
    minHeight: "150px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
      minHeight: "300px",
    },
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productName: {
    fontFamily: "Laviossa",
    fontSize: "1.8rem",
    margin: "5px 30px 0 5px",
    padding: "10px",
    textDecoration: "none",
    color: "#3D3833",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
      marginRight: "5px",
    },
  },
  productPrice: {
    fontFamily: "Laviossa",
    fontSize: "1.5rem",
    margin: "5px 5px 0 30px",
    padding: "10px",
    color: "#3D3833",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      marginLeft: "5px",
    },
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "250px",
    [theme.breakpoints.up("sm")]: {
      marginRight: "50px",
    },
  },
  removeProductButton: {
    fontFamily: "Laviossa",
    color: "#BB876A",
  },
}));
