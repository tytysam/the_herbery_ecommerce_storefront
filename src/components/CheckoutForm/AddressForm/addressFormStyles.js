import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  backCheckoutStepButton: {
    fontFamily: "Laviossa",
    color: "#BB876A",
    backgroundColor: "transparent",
    border: "2px solid #BB876A",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  nextCheckoutStepButton: {
    fontFamily: "Laviossa",
    color: "#ffffff",
    backgroundColor: "#00AB84",
    border: "2px solid #00AB84",
    padding: "12px 25px",
    "&:hover": {
      backgroundColor: "#00AB84",
    },
  },
}));
