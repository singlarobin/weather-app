import classes from './styles.module.css';
import ErrorIcon from '../../assets/errorIcon';

const Error = props => {
    const { message } = props;
    return <div className={classes.errorContainer}>
        <ErrorIcon />
        <div className={classes.errorContent}>
            {message}
        </div>
    </div>;
};

export default Error;
