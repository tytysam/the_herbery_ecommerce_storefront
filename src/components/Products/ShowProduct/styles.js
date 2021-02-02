import { makeStyles } from "@material-ui/core/styles";

// Still getting used to the JS-formatted CSS that Material UI requires...

export default makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: 100,
  },
  toolbar: theme.mixins.toolbar,
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
