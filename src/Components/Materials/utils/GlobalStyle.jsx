import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #cccab8;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  img {
    max-width: 100%;
    display: block;
    height: auto;
  }
  
  p,
  h1,
  h2,
  h3 {
    margin: 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
