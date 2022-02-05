import { createGlobalStyle, ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./dash.css";

const GlobalStyle = createGlobalStyle`
  *{
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #0A0E0F;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #13625C;
      border-radius: 10px;
    }
  }
  body {
    box-sizing: border-box;
    color: #fafafa;
    background: #0A0E0F;
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
