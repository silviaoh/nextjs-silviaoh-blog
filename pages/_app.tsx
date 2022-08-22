import type { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
