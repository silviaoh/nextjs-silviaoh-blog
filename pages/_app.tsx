import React from 'react';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { AppProps } from 'next/app';

import GlobalStyle from '../src/styles/Global';
import theme from '../src/styles/Theme';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Loading from '../src/components/common/Loading';
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Loading />

        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default MyApp;
