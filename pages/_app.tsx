import React from 'react';
import Header from '../components/Header';
import theme from '../src/theme';
import { ThemeProvider } from 'theme-ui';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
