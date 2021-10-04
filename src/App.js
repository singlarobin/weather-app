import { useState, useEffect } from 'react';
import { Grid, withStyles } from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './style';
import Search from './component/search/search';
import Home from './component/home/Home';
import Error from './component/error/error';
import Weather from './component/weather/weather';

const App = (props) => {
    const [cityName, setCityName] = useState('');
    const [fetchStatus, setFetchStatus] = useState('0');
    const [height, setHeight] = useState('100vh');
    const [message, setMessage] = useState('');
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        document.body.style.height = height;
    });

    const handleOnLoading = (value) => {
        setIsLoading(value);
    };

    const handleOnDataFetching = (value, fetchStatus, list, message) => {
        setIsLoading(value);
        setFetchStatus(fetchStatus);
        setList(list);
        setMessage(message);
        if (fetchStatus !== '1') {
            setHeight('100vh');
        } else {
            setHeight('350vh');
        }
    };

    const { classes } = props;
    console.log(height);
    return (
        <Grid container className={classes.container}>
            <Search
                cityName={cityName}
                handleLoading={handleOnLoading}
                handleCityName={setCityName}
                handleDataFetching={handleOnDataFetching}
            />

            {isLoading ? (
                <CircularProgress className={classes.progress} color="secondary" />
            ) : fetchStatus === '1' ? (
                <Weather list={list} city={cityName} />
            ) : fetchStatus === '0' ? (
                <Home />
            ) : (
                <Error message={message} />
            )}
        </Grid>
    );
};
export default withStyles(styles)(App);
