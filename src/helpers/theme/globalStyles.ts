import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "League Spartan", sans-serif;
    src: url('/fonts/LeagueSpartan-Reguler.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "League Spartan", sans-serif;
    src: url('/fonts/LeagueSpartan-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "League Spartan", sans-serif;
    src: url('/fonts/LeagueSpartan-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "League Spartan", sans-serif;
    src: url('/fonts/LeagueSpartan-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  :root {
     color-scheme: light dark;
     color: #fff;
     background-color: #040518;
     font-synthesis: none;
     text-rendering: optimizeLegibility;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    font-family: "League Spartan", sans-serif;
    font-weight: ${(props) => props.theme.fontWeight.normal};
    font-style: normal;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
