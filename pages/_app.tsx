import React from 'react';
import GlobalStyle from '../components/common/Global.style';
import { ThemeProvider } from 'styled-components';
import theme from '../components/common/Theme.style';
import RootLayout from '../components/layout/RootLayout';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const MyApp = ({ Component, pageProps, props }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
