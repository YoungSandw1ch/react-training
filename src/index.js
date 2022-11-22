import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './Components/App';
import { ThemeProvider } from 'styled-components'
import { theme } from './constants/thema'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

