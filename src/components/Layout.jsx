import React from 'react';
import Head from 'next/head';
import { Box } from './Box';
import { Container } from '@nextui-org/react';

export function Layout({ children, pageTitle, pageDescription, container }) {
  return (
    <>
      <Head>
        <title>{`Luciano Piñol - ${pageTitle || 'Portfolio'}`}</title>
        <meta name='description' content={pageDescription} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box
        css={{
          maxW: '100%',
          fontFamily: '$sans',
          fontWeight: '$bold',
        }}
      >
        <Container
          display={container?.display || 'flex'}
          direction={container?.direction || 'column'}
          justify={container?.justify || 'center'}
          alignItems={container?.align || 'center'}
        >
          {children}
        </Container>
      </Box>
    </>
  );
}
