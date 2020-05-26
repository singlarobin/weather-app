import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Animation } from "@devexpress/dx-react-chart";
import styles from "./graphStyles.js";

const format = () => tick => tick;
class Demo extends React.PureComponent {
  render() {
    const { classes, data: chartData } = this.props;

    return (
      <Paper>
        <Chart data={chartData} className={classes.chart}>
          <ArgumentAxis tickFormat={format} />
          <ValueAxis max={400} />

          <LineSeries name="Temp" valueField="temp" argumentField="year" />

          <Legend position="bottom" />
          <Title
            text={`Confidence in Institutions in American society ${"\n"}(Great deal)`}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(styles)(Demo);
