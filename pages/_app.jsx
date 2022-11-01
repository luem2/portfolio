import React, { useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Navbar, SidebarMenu } from '../src/components';
import { darkTheme, lightTheme } from '../themes';
import { LangProvider } from '../src/context/langContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [active, setActive] = useState('/');
  const [openMenu, setOpenMenu] = useState(false);

  const activeLink = [active, setActive];
  const activeMenu = [openMenu, setOpenMenu];

  const isDarkMode = globalThis.localStorage?.getItem('theme') === 'dark';
  const theme = !isDarkMode ? lightTheme : darkTheme;

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
        <NextUIProvider theme={theme}>
          <Navbar activeLink={activeLink} activeMenu={activeMenu} />
          <SidebarMenu activeLink={activeLink} activeMenu={activeMenu} />
          <Component
            {...pageProps}
            activeLink={activeLink}
            activeMenu={activeMenu}
          />
        </NextUIProvider>
      </NextThemesProvider>
    </LangProvider>
  );
}

export default MyApp;
