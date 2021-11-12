import React from "react";
import layoutStyles from "./layoutStyles";
import { Container, Typography } from "@material-ui/core";
import Footer from "./Footer/Footer";
import Header from "./Header/Heder";

function Layout({ children }) {
  const classes = layoutStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container component={"main"} className={classes.main}>
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
