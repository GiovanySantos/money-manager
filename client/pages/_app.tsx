import * as React from "react";
import type { AppProps } from "next/app";
// MUI
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
// Bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css";
//Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
//Emotion
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../utility/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import "../styles/globals.scss";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

