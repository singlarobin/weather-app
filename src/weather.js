import React, { Component } from "react";
import styles from "./weatherStyle";
import { withStyles, Grid, Typography, Paper, Box } from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

class Weather extends Component {
  state = {
    tempMin: null,
    tempMax: null,
    Date: null
  };
  render() {
    const { classes, list, city } = this.props;
    //console.log("data:", list);

    var weatherData = [];
    while (list.length > 0) {
      weatherData.push(list.splice(0, 4));
    }
    console.log("weather Data: ", weatherData);
    var description = new Array(10);
    for (var i = 0; i < description.length; i++) {
      description[i] = new Array(4);
    }
    for (i = 0; i < weatherData.length; i++) {
      for (var j = 0; j < weatherData[i].length; j++) {
        description[i][j] = weatherData[i][j];
      }
    }
    return (
      <Grid item spacing={3}>
        <Grid container item sm={12} xs={12} spacing={3}>
          <Grid item sm={12} xs={12}>
            <Paper className={classes.paperHeader}>City: {city}</Paper>
          </Grid>
        </Grid>

        {weatherData.map((weather, index) => {
          return (
            <Grid container item sm={12} xs={12} spacing={3} key={index}>
              {weather.map((data, _index) => {
                const value = data.dt_txt.split(" ");
                return (
                  <Grid item xs={3} sm={3} key={_index}>
                    <Paper className={classes.paper}>
                      {/* data.main.temp_max  data.main.temp_min   */}
                      <Box display="flex" p={1} bgcolor="grey.300">
                        <Box p={1} flexGrow={1} bgcolor="grey.300">
                          Data:{value[0]}
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                          Time:{value[1]}
                        </Box>
                      </Box>

                      <Box display="flex" p={1} bgcolor="grey.300">
                        <Box p={1} flexGrow={1} bgcolor="grey.300">
                          Min. Temp:{data.main.temp_min}
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                          Max.Temp:{data.main.temp_max}
                        </Box>
                      </Box>
                      {/* <Paper>
                        <Typography className={classes.typography}>
                          Min. Temp:
                        </Typography>
                        <Typography>Max.Temp:</Typography>
                      </Paper> */}
                      <WbSunnyIcon />
                      <Typography>{data.weather[0].description}</Typography>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default withStyles(styles)(Weather);
