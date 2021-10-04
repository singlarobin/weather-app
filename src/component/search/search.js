import styles from './style.js';
import { Grid, Paper, TextField, withStyles } from '@material-ui/core';
const Search = (props) => {
    const { classes } = props;

    const submitCityName = () => {
        document.getElementById('cityText').innerHTML = ' ';
        props.handleLoading(true);

        fetch(
            'https://community-open-weather-map.p.rapidapi.com/forecast?q=' +
        props.cityName,
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-key':
            process.env.RAPID_API_ACCESS_KEY,
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.list) {
                    props.handleDataFetching(false, '1', data.list, 'success');
                } else {
                    props.handleDataFetching(false, '2', [], data.message);
                }
            })
            .catch((err) => {
                console.log('error: ', err);
                props.handleDataFetching(false, '2', [], err);
            });
    };

    const handleCityName = (e) => e.keyCode === 13 ? submitCityName() : props.handleCityName(e.target.value);
    return (
        <Grid container className={classes.container}>
            <Grid item>
                <Paper className={classes.searchBar}>
                    <TextField
                        fullWidth
                        id="cityText"
                        placeholder="Search"
                        onKeyUp={(e) => handleCityName(e)}
                        color="primary"
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Search);
