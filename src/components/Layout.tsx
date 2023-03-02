import Head from 'next/head'
import { Container } from '@nextui-org/react'

import { Box } from './Box'

interface Props {
    children: JSX.Element | JSX.Element[]
    pageTitle: string
    pageDescription: string
    container?: {
        [name: string]: unknown
    }
}

export function Layout({
    children,
    pageTitle,
    pageDescription,
    container = {},
}: Props) {
    return (
        <>
            <Head>
                <title>{`Luciano Piñol - ${pageTitle || 'Portfolio'}`}</title>
                <meta content={pageDescription} name='description' />
                <link href='/favicon.ico' rel='icon' />
            </Head>
            <Box
                css={{
                    maxW: '100%',
                    fontFamily: '$sans',
                    fontWeight: '$bold',
                    ...container,
                }}
            >
                <Container
                    alignItems='center'
                    direction='column'
                    display='flex'
                    justify='center'
                >
                    {children}
                </Container>
            </Box>
        </>
    )
}
