import { NextUIProvider } from '@nextui-org/react';

import { Navbar } from '../src/components';
import { darkTheme, lightTheme } from '../themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Navbar />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
