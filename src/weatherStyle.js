import { green } from "@material-ui/core/colors";

const styles = theme => ({
  paperHeader: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
    backgroundColor: green[400]
  },
  typography: {
    flexGrow: 1
  }
});

export default styles;
