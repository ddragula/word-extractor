import React from 'react';
import ReactDOM from 'react-dom';
import {CssBaseline, ThemeProvider} from "@material-ui/core";

import App from './components/App/App';

import light from "./themes/light";

ReactDOM.render(  <React.StrictMode>
      <ThemeProvider theme={light}>
          <CssBaseline />
          <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);