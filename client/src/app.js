import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(
  <div>
    <MuiThemeProvider>
      <Dashboard />
    </MuiThemeProvider>
  </div>,
  document.getElementById('app')
);
