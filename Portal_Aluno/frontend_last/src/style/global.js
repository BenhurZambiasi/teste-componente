import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial,  sans-serif;

  }

  html, body, #root{
    height: 100%;
    width: 100%; 
  }
`;