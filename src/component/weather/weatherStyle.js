import { green } from '@material-ui/core/colors';

const styles = (theme) => ({
    container: { justifyContent: 'center', },
    paperHeader: {
        padding: theme.spacing(2),
        margin: theme.spacing(10, 'auto'),
        width: '40vw',
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: green[400],
    },
    content: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    root: {
        margin: theme.spacing(2),
        padding: theme.spacing(2),
    },
    typography: { flexGrow: 1, },
    title: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default styles;
