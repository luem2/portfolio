import React, { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Navbar } from '../src/components';
import { darkTheme, lightTheme } from '../themes';
import { LangProvider } from '../src/context/langContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [active, setActive] = useState('/');

  return (
    <LangProvider>
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
    </LangProvider>
  );
}

export default MyApp;
