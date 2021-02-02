import { makeStyles } from "@material-ui/core/styles";

// Still getting used to the JS-formatted CSS that Material UI requires...

export default makeStyles((theme) => ({
  mainProductImageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  mainProductImage: {
    height: "500px",
    [theme.breakpoints.only("xs")]: {
      height: "300px",
    },
  },
}));
