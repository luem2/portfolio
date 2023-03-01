import type { AppProps } from 'next/app'

import React from 'react'
import { NextUIProvider, useSSR } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Navbar, SidebarMenu } from '../src/components'
import { darkTheme, lightTheme } from '../themes'
import { LangProvider } from '../src/context/langContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    const { isBrowser } = useSSR()

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
                        <Navbar />
                        <SidebarMenu />
                        <Component {...pageProps} />
                    </NextThemesProvider>
                </NextUIProvider>
            </LangProvider>
        )
    )
}

export default MyApp
