import { blueGrey } from "@material-ui/core/colors";

const styles = () => ({
  container: (props) => ({
    backgroundColor: blueGrey[600],
    margin: "-1rem",
    height: props.height || "100vh",
  }),
  // container: {
  //   backgroundColor: blueGrey[600],
  //   margin: "-1rem",
  //   // height: "100vh",
  // },
  progress: {
    marginLeft: "calc(45%)",
  },
});
export default styles;
