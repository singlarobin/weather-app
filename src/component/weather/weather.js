import React, { Component } from "react";
import styles from "./weatherStyle";
import {
  withStyles,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Box,
} from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

class Weather extends Component {
  state = {
    tempMin: null,
    tempMax: null,
    Date: null,
  };
  render() {
    const { classes, list, city } = this.props;
    //console.log("data:", list, "city: ", city);
    var weatherData = [];

    if (list && list.length > 0) {
      weatherData = list;
    }
    return (
      <Grid container>
        <Grid container className={classes.container}>
          <Grid item>
            <Paper className={classes.paperHeader}>City: {city}</Paper>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          {weatherData.map((item, index) => {
            const [date, time] = item.dt_txt.split(" ");
            const minTemp = item.main.temp_min;
            const maxTemp = item.main.temp_max;
            const description = item.weather[0].description;
            return (
              <Grid item className={classes.root} variant="outlined">
                <Paper>
                  <Box display="flex" p={1} bgcolor="grey.300">
                    <Box p={1} flexGrow={1} bgcolor="grey.300">
                      {date}
                    </Box>
                    <Box p={1} bgcolor="grey.300">
                      {time}
                    </Box>
                  </Box>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {description}
                  </Typography>
                  <Box display="flex" p={1} bgcolor="grey.300">
                    <Box p={1} flexGrow={1} bgcolor="grey.300">
                      {minTemp}
                    </Box>
                    <Box p={1} bgcolor="grey.300">
                      {maxTemp}
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Weather);

/////date-> list.dt
/////temp->list.main.temp_min, list.main.temp_max
/////desc->list.weather[0].description
