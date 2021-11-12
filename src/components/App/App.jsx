import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import StartPage from "./StartPage/StartPage";
import ExtractPage from "./ExtractPage/ExtractPage";
import ResultPage from "./ResultPage/ResultPage";

function App() {
  const [wordsArray, setWordsArray] = useState([]);

  useEffect(() => {
    if (wordsArray.length < 1) {
      const backupWords = JSON.parse(localStorage.getItem("words"));
      if (backupWords.length) {
        setWordsArray(backupWords);
      }
    }
  }, [wordsArray]);

  const extractWordsHandler = (words) => {
    setWordsArray(words);
    localStorage.setItem("words", JSON.stringify(words));
  };

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
