import type { AppProps } from 'next/app';
import React from 'react';
import GlobalStyle from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
