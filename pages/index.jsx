import { Container, Text } from '@nextui-org/react';
import Head from 'next/head';
import { Layout } from '../src/components/Layout';
import { Box } from '../src/components';

export default function Home() {
  return (
    <>
      <Layout />
      {/* <Box>Hola</Box> */}
      <Container>
        <Text
          h1
          size={80}
          css={{
            marginTop: 40,
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
        >
          Luciano Piñol
        </Text>
      </Container>
    </>
  );
}
