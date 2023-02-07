import type { AppProps } from 'next/app'

import React, { useState } from 'react'
import { NextUIProvider, useSSR } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Navbar, SidebarMenu } from '../src/components'
import { darkTheme, lightTheme } from '../themes'
import { LangProvider } from '../src/context/langContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    const { isBrowser } = useSSR()
    const [active, setActive] = useState<string>('/')
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const activeLink = [active, setActive]
    const activeMenu = [openMenu, setOpenMenu]

    const isDarkMode = globalThis.localStorage?.getItem('theme') === 'dark'
    const theme = !isDarkMode ? lightTheme : darkTheme

    return (
        isBrowser && (
            <LangProvider>
                <NextUIProvider theme={theme}>
                    <NextThemesProvider
                        defaultTheme='system'
                        attribute='class'
                        value={{
                            light: lightTheme.className,
                            dark: darkTheme.className,
                        }}
                    >
                        <Navbar
                            activeLink={activeLink}
                            activeMenu={activeMenu}
                        />
                        <SidebarMenu
                            activeLink={activeLink}
                            activeMenu={activeMenu}
                        />
                        <Component
                            {...pageProps}
                            activeLink={activeLink}
                            activeMenu={activeMenu}
                        />
                    </NextThemesProvider>
                </NextUIProvider>
            </LangProvider>
        )
    )
}

export default MyApp
