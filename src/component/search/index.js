import classes from './styles.module.css';
import IconButton from '../IconButton';
import SearchIcon from '../../assets/searchIcon';

const Search = props => {
    const { cityName, handleCityName, handleDataFetch } = props;

    const handleInputChange = e => handleCityName(e.target.value);

    return <div className={classes.searchContainer}>
        <input className={classes.inputContainer} placeholder={`Search`} value={cityName} onChange={handleInputChange} />
        <IconButton handleClick={handleDataFetch}>
            <SearchIcon />
        </IconButton>

    </div>;
};

export default Search;