import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: "5%",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  checkoutHeader: {
    fontFamily: "Laviossa",
    fontSize: "2.5rem",
    textAlign: "center",
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  checkoutStepCounter: {},
  active: { color: "#00AB84 !important" },
  completed: { color: "#BB876A !important" },
  disabled: {},
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  backCheckoutStepButton: {
    fontFamily: "Laviossa",
    color: "#BB876A",
    backgroundColor: "transparent",
    border: "2px solid #BB876A",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  divider: {
    margin: "20px 0",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spacerDiv: {
    height: "50px",
  },
}));
