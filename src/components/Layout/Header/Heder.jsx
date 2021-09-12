import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import headerStyles from "./headerStyles";
import {Link} from "react-router-dom";

function Header() {
    const classes = headerStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/start" className={classes.logoLink}>
                    <Typography component="h1" variant="h6">
                        Word Extractor
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;