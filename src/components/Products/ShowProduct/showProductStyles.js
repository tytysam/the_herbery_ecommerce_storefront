import { makeStyles } from "@material-ui/core/styles";

// Still getting used to the JS-formatted CSS that Material UI requires...

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: theme.spacing(3),
    marginTop: 100,
  },
  toolbar: theme.mixins.toolbar,
  productContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
}));
