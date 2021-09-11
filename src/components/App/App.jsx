import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import StartPage from "./StartPage/StartPage";
import ExtractPage from "./ExtractPage/ExtractPage";

function App() {
    return (
        <Layout>
            <Router>
                <Switch>
                    <Route path="/start">
                        <StartPage />
                    </Route>
                    <Route path="/extract">
                        <ExtractPage />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/start" />
                    </Route>
                </Switch>
            </Router>
        </Layout>
    );
}

export default App;