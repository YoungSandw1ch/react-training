import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { App } from './Components/App';
// import { App } from './Components/State/App';
// import { App } from './Components/Todos/App/App';
// import { App } from './Components/Reader/App';
// import { App } from './Components/Pokemon/App';
// import { App } from './Components/Materials/App';
// import { App } from 'Components/BrowserRouter/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/thema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
