import { createGlobalStyle, ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.scss";

const GlobalStyle = createGlobalStyle`
  *{
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: var(--bg-green-dark);
      border-radius: 10px;
      margin: 50px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--bg-green-dark);
      border-radius: 10px;
    }
  }
  body {
    box-sizing: border-box;
    color: var(--bg-white);
    background: var(--bg-dark);
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
