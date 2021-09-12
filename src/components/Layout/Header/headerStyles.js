import {makeStyles} from "@material-ui/core";

const headerStyles = makeStyles(theme => ({
    logoLink: {
        textDecoration: "none",
        color: theme.palette.primary.contrastText
    }
}));

export default headerStyles;