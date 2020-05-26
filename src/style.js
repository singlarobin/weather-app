import { blueGrey, blue } from "@material-ui/core/colors";

const styles = theme => ({
  container: {
    backgroundColor: blueGrey[600]
  },
  searchBar: {
    padding: theme.spacing(2),
    margin: theme.spacing(2)
  },
  progress: {
    marginLeft: "calc(45%)"
  },
  paperContent: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    textAlign: "center"
  },
  initialContent: {
    color: blue[900]
  },
  errorContent: {
    color: blue[900]
  }
});
export default styles;
