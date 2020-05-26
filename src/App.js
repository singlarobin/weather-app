import React, { Component } from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";

import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./style";
import Weather from "./weather";
class App extends Component {
  state = {
    cityName: "",
    fetchStatus: "0",
    list: [],
    isLoading: false
  };

  submitCityName = () => {
    //console.log("submit");
    document.getElementById("cityText").innerHTML = " ";
    this.setState({
      isLoading: true
    });

    fetch(
      "https://community-open-weather-map.p.rapidapi.com/forecast?q=" +
        this.state.cityName,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "54ed02bbfdmshb2ec4694ce6a881p1dbfb7jsn2cf94ca09455"
        }
      }
    )
      .then(response => response.json())
      .then(data => {
        //this.setState({ data: data });
        this.setState({
          fetchStatus: "1",
          list: data.list,
          isLoading: false
        });
        //console.log("json: ", data);
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          fetchStatus: "-1",
          isLoading: false
        });
      });
  };
  handleCityName = e => {
    e.keyCode === 13
      ? this.submitCityName()
      : this.setState({ cityName: e.target.value });
  };
  render() {
    //console.log("data:", this.state.data);
    const { classes } = this.props;
    const { fetchStatus, list, cityName, isLoading } = this.state;
    return (
      <Grid container spacing={3} className={classes.container}>
        <Grid item sm={12} xs={12}>
          <Paper className={classes.searchBar}>
            <TextField
              fullWidth
              id="cityText"
              placeholder="Search"
              onKeyUp={e => this.handleCityName(e)}
              color="primary"
            />
          </Paper>
        </Grid>

        {isLoading ? (
          <CircularProgress className={classes.progress} color="secondary" />
        ) : fetchStatus === "1" ? (
          <Weather list={list} city={cityName} />
        ) : fetchStatus === "0" ? (
          <Grid item sm={12} xs={12}>
            <Paper className={classes.paperContent}>
              <Typography
                variant="h6"
                align="center"
                className={classes.initialContent}
              >
                Check weather at your Location.
              </Typography>
            </Paper>
          </Grid>
        ) : (
          <Grid item sm={12} xs={12}>
            <Paper className={classes.paperContent}>
              <ErrorOutlineIcon fontSize="large" />
              <Typography
                className={classes.errorContent}
                variant="h6"
                align="center"
              >
                Something Went Wrong.
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    );
  }
}
export default withStyles(styles)(App);
