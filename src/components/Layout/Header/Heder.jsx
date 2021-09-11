import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import headerStyles from "./headerStyles";

function Header() {
    const classes = headerStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Word Extractor
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;