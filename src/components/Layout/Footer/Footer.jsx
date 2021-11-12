import React from "react";
import { Container, Link, Typography } from "@material-ui/core";
import footerStyles from "./footerStyles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Vazonik/" target="_blank">
        Dawid Draguła
      </Link>{" "}
      {new Date().getFullYear()}
      {" | v0.1.2"}
    </Typography>
  );
}

function Footer() {
  const classes = footerStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <Typography align="center" variant="body1">
          Made with ♥ by Vazonik
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

export default Footer;
