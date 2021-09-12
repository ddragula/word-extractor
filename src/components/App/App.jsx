import React, {useState} from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
import StartPage from "./StartPage/StartPage";
import ExtractPage from "./ExtractPage/ExtractPage";
import ResultPage from "./ResultPage/ResultPage";

function App() {
    const [wordsArray, setWordsArray] = useState([]);

    const extractWordsHandler = words => {
        setWordsArray(words);
    }

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/start">
                        <StartPage />
                    </Route>
                    <Route path="/extract">
                        <ExtractPage extractWordsHandler={extractWordsHandler} />
                    </Route>
                    <Route path="/result">
                        <ResultPage words={wordsArray} />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/start" />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;