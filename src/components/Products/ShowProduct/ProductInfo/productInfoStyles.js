import { makeStyles } from "@material-ui/core/styles";

// Still getting used to the JS-formatted CSS that Material UI requires...

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    marginTop: 100,
  },
  productInfoContainer: {
    height: "100%",
    maxWidth: "600px",
    marginLeft: "25px",
  },
  productName: {
    fontFamily: "Laviossa",
    fontSize: "3rem",
    marginBottom: "0",
  },
  purchaseOptionsContainer: {
    display: "flex",
  },
  productPrice: {
    fontFamily: "Laviossa",
    fontSize: "2rem",
    marginLeft: "20px",
    marginTop: "0",
  },
  addProductToCartButton: {
    backgroundColor: "#00AB84",
    fontFamily: "Laviossa",
    fontSize: "0.9rem",
    fontWeight: "900",
    color: "#D1E0DF",
    border: "none",
    borderRadius: "8px",
    marginLeft: "35px",
    "&:hover": {
      color: "#F6D3BB",
      backgroundColor: "#00AB84",
      // border: "2px solid #D1E0DF",
      // fontSize: "1rem",
    },
  },
  productInfoDivider: {
    marginTop: "20px",
    width: "75%",
  },
  productDescriptionHtmlContainer: {
    marginRight: "50px",
  },
  productDescriptionHtml: {
    // fontFamily: "Laviossa",
  },
}));
