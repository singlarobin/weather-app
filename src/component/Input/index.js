import classes from './styles.module.css';

const Input = props => {
    const { inputValue, placeholder, handleInputChange } = props;
    
    return <input className={classes.inputText} placeholder={placeholder}
        value={inputValue} onChange={handleInputChange} />;
};

export default Input;