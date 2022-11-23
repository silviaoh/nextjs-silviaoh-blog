import React from 'react';
import GlobalStyle from '../src/styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/Theme';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default MyApp;
