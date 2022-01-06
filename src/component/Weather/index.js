import classes from './styles.module.css';
import Card from '../card';

const Weather = props => {
    const { list, city } = props;
    console.log(list);
    return <div className={classes.weatherContainer}>
        <div className={classes.header}>
            {city.charAt(0).toUpperCase() + city.slice(1)}
        </div>
        <div className={classes.options}>

        </div>
        <div className={classes.listContainer}>
            {list.map((weather, index) => <Card key={index} weather={weather} />)}
        </div>

        {/* list */}
    </div>;
};

export default Weather;

//time
//description
//icon
//temp
