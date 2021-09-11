import React from 'react';
import {Container, Typography} from "@material-ui/core";
import footerStyles from "./footerStyles";

function Footer() {
    const classes = footerStyles();

    return (
        <footer className={classes.root}>
            <Container>
                <Typography variant="body1">My sticky footer can be found here.</Typography>
                Test
            </Container>
        </footer>
    );
}

export default Footer;