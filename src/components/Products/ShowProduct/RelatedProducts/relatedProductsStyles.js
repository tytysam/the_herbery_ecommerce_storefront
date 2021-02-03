import { makeStyles } from "@material-ui/core/styles";

// import lowLight from "../../assets/images/multipurpose-plant-pic_1.jpg";
// import bestSellers from "../../assets/images/multipurpose-plant-pic_2.jpg";
// import easyCare from "../../assets/images/multipurpose-plant-pic_3.jpg";

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    margin: "0 auto",
  },
  toolbar: theme.mixins.toolbar,
  relatedProductsContainer: {
    backgroundColor: "#ffffff",

    marginTop: 100,
  },
  relatedProductsHeader: {
    fontFamily: "Laviossa",
    fontSize: "3rem",
    textAlign: "center",
  },
  relatedProductsColumnContainer: {
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
  firstColumn: { minWidth: "250px" },
  relatedProductCard: {
    maxWidth: "100%",
    borderRadius: "0 0 8px 8px",
    minWidth: "225px",
    [theme.breakpoints.only("xs")]: {
      minHeight: "250px",
      width: "275px",
    },
  },
  cardContent: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    margin: "0 auto",
    minWidth: "225px",
  },
  relatedProductImage: {
    height: "350px",
  },
  relatedProductName: {
    fontFamily: "Laviossa",
    fontSize: "1.3rem",
    padding: "3px",
    textDecoration: "none",
    color: "#3D3833",
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.8rem",
    },
  },
  relatedProductPrice: {
    fontFamily: "Laviossa",
    fontSize: "1rem",
    padding: "3px",
    color: "#3D3833",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem",
    },
  },
  middleColumn: {
    minWidth: "250px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "20px",
    },
  },

  thirdColumn: {
    minWidth: "250px",
    [theme.breakpoints.only("xs")]: {
      marginTop: "20px",
    },
  },
}));
