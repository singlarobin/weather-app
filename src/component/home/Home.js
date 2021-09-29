import { Grid, Paper, Typography, withStyles } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';

const styles = (theme) => ({
    container: { justifyContent: 'center', },
    paperContent: {
        padding: theme.spacing(2),
        margin: theme.spacing(10, 'auto'),
        width: '60vw',
        textAlign: 'center',
    },
    initialContent: { color: blue[900], },
});

const Home = (props) => {
    const { classes } = props;
    return (
        <Grid container className={classes.container}>
            <Grid item>
                <Paper className={classes.paperContent}>
                    <Typography
                        variant="h6"
                        align="center"
                        className={classes.initialContent}
                    >
            Check weather at your Location.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Home);
