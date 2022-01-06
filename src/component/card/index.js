import classes from './styles.module.css';
import RainIcon from '../../assets/rainIcon';
import CloudIcon from '../../assets/cloudIcon';
import SkyIcon from '../../assets/skyIcon';
import SnowIcon from '../../assets/snowIcon';
import StormIcon from '../../assets/stormIcon';

const Card = props => {
    const { weather } = props;

    const [date, time] = weather.time.split(' ');

    const getIcon = () => {
        if (weather.description.includes('clear sky')) return <SkyIcon />;
        if (weather.description.includes('rain')) return <RainIcon />;
        if (weather.description.includes('storm')) return <StormIcon />;
        if (weather.description.includes('snow')) return <SnowIcon />;
        if (weather.description.includes('cloud')) return <CloudIcon />;
    };

    return <div className={classes.cardContainer}>
        <div className={classes.container}>
            {getIcon()}
            <div className={classes.description}>{weather.description}</div>
        </div>
        <div className={classes.container}>
            <div className={classes.text}>{date}</div>
            <div className={classes.text}>{time}</div>
        </div>
    </div>;
};

export default Card;