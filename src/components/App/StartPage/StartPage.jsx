import React from 'react';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import startPageStyles from "./startPageStyles";
import {Link} from "react-router-dom";

function StartPage() {
    const classes = startPageStyles();

    return (
        <>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.title} gutterBottom>
                    Word Extractor
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    A simple web application that helps you learn the most frequently used words of any language from any text.
                </Typography>
            </Container>
            <Container maxWidth="sm" className={classes.buttonsContainer}>
                <Grid container spacing={5} alignItems="flex-end">
                    <Grid item xs={12} sm={6}>
                        <Link to="/extract">
                            <Button color="primary" variant="contained" fullWidth size="large">Start with a text</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button color="primary" variant="contained" fullWidth size="large" disabled>Load saved words</Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default StartPage;