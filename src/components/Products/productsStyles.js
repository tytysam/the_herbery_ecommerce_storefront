import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    padding: theme.spacing(1),
  },
  gridContainer: {
    width: "88%",
    maxWidth: "1450px",
    margin: "0 auto",
  },
  root: {
    flexGrow: 1,
  },
}));
