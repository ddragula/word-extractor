import {makeStyles} from "@material-ui/core";

const layoutStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    }
}));

export default layoutStyles;