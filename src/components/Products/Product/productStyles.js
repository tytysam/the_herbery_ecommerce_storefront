import { makeStyles } from "@material-ui/core/styles";

// Still getting used to the JS-formatted CSS that Material UI requires...

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    borderRadius: "0 0 8px 8px",
    marginBottom: "50px",
  },
  media: {
    height: "450px",
    // paddingTop: "56.25%", // 16:9 aspect ratio
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontFamily: "Laviossa",
    fontSize: "1.3rem",
    padding: "5px",
    textDecoration: "none",
    color: "#3D3833",
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.8rem",
    },
  },
  productPrice: {
    fontFamily: "Laviossa",
    fontSize: "1.5rem",
    padding: "5px",
    color: "#3D3833",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  addToCartButton: {
    fontFamily: "Laviossa",
    fontSize: "0.9rem",
    fontWeight: "900",
    backgroundColor: "transparent",
    color: "#3D3833",
    border: "2px solid #3D3833",
    borderRadius: "8px",
    "&:hover": {
      color: "#D1E0DF",
      backgroundColor: "#00AB84",
      // border: "2px solid #D1E0DF",
      border: "2px solid #00AB84",
      // fontSize: "1rem",
    },
    padding: "12px 45px",
    marginBottom: "10px",
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.2rem",
    },
  },
  shoppingBagIcon: {
    marginLeft: "15px",
  },
}));
