import { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Navbar } from '../src/components';
import { darkTheme, lightTheme } from '../themes';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [active, setActive] = useState('/');

  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider theme={darkTheme}>
        <Navbar activeLink={[active, setActive]} />
        <Component {...pageProps} activeLink={[active, setActive]} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
