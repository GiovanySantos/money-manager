import { createGlobalStyle, ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    color: #fafafa;
    background: #041413;
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
