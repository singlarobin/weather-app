import classes from './styles.module.css';

const IconButton = props => {
    const { children, handleClick, style } = props;
    
    return <button className={classes.iconContainer} style={style} onClick={handleClick}>
        {children}
    </button>;
};

export default IconButton;