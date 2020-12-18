import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  html, body {
    height: 100%;
  }

  a.link {
    color: #909090;
  }

  a.link:active , a.link:hover,   {
    color: #020075;
  }

  a.activeLink {
    color: #3f51b5;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;