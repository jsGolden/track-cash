import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    --orange: #C94A21;
    --blue: #2980B9;
    --green: #27AE60;
    --alert: #D4BD27;

    --background: #E5E5E5;
    --line: #C4C4C4;
    --gray: #6D6D6D;
    --dark: #222222;

    --red-light: #FEEEEC;
    --blue-light: #CEE3F1;
    --green-light: #D4EFDF;
    --light: #FFFFFF;

    --danger: #C0392B;
    --error: #ff3838;
    --blue-dark: #34495E;
    --green-dark: #229954;
  }

  html, body, input, button, textarea, p {
    font: 400 1.6rem 'Ubuntu', sans-serif;
  }

  body {
    background-color: var(--background);
  }
`;
