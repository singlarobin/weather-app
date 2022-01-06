import { useState } from 'react';
import classes from './styles.module.css';
import Search from '../Search';
import Home from '../Home';
import Error from '../Error';
import Weather from '../Weather';
import Loader from '../Loader';
import { isEmptyString } from '../../utils';

const Page = () => {
    const [cityName, setCityName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [weatherList, setWeatherList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleCityName = value => setCityName(value);
    const processData = data => {
        const currentList = data.map(weather => {
            const obj = {
                'time': weather.dt_txt,
                'description': weather.weather[0].description,
                'temp': weather.main.temp
            };
            return obj;
        });
        setWeatherList(currentList);
    };
    const handleDataFetch = async () => {
        //document.getElementById('cityText').innerHTML = ' ';
        if(isEmptyString(cityName)) {
            setErrorMessage('Enter City Name');
            return;
        }
        setIsLoading(true);
        let response = await fetch('https://community-open-weather-map.p.rapidapi.com/forecast?q=' + cityName,
            {
                'method': 'GET',
                'headers': {
                    'x-rapid-host': 'community-open-weather-map.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_WEATHER_API_KEY
                }
            });
        let data = await response.json();
        setErrorMessage(data.message? data.message: '');
        setTimeout(() => {
            if(isEmptyString(errorMessage)) processData(data.list);
        }, 0);
        
        setIsLoading(false);
    };

    return <div className={classes.container}>
        <Search cityName={cityName}
            handleCityName={handleCityName}
            handleDataFetch={handleDataFetch}
        />
        {isLoading ? <Loader />
            : !isEmptyString(errorMessage) ? <Error message={errorMessage} />
                : weatherList.length === 0 ? <Home />
                    : <Weather list={weatherList} city={cityName} />
        }
    </div>;
};

export default Page;
