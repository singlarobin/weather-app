import React from "react";
import { Grid, Paper, Typography, withStyles } from "@material-ui/core";

import { blue } from "@material-ui/core/colors";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const styles = (theme) => ({
  container: {
    justifyContent: "center",
  },
  paperContent: {
    padding: theme.spacing(2),
    margin: theme.spacing(10, "auto"),
    width: "60vw",
    textAlign: "center",
  },
  errorContent: {
    color: blue[900],
  },
});

const Error = (props) => {
  const { classes, message } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Paper className={classes.paperContent}>
          <ErrorOutlineIcon fontSize="large" />
          <Typography
            className={classes.errorContent}
            variant="h6"
            align="center"
          >
            {message ? message : `Something Went Wrong.`}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Error);
