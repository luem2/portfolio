import React from 'react';
import { Layout, TechGrid } from '/src/components';
import { Text } from '@nextui-org/react';

export default function TechStack() {
  return (
    <Layout
      pageTitle='Tech Stack'
      pageDescription='This is my technologies stack for development'
    >
      <Text css={{ marginBottom: '$15' }} h1 color='$pink600'>
        Tech Stack
      </Text>
      <TechGrid />
    </Layout>
  );
}
