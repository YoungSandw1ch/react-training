import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { App } from './Components/App';
// import { App } from './Components/Todos/App';
// import { App } from './Components/State/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/thema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
