import classes from './styles.module.css';
import Card from '../Card';

const Weather = props => {
    const { list, city } = props;
    return <div className={classes.weatherContainer}>
        <div className={classes.header}>
            {city.charAt(0).toUpperCase() + city.slice(1)}
        </div>
        <div className={classes.listContainer}>
            {list.map((weather, index) => <Card key={index} weather={weather} />)}
        </div>
    </div>;
};

export default Weather;