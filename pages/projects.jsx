import { Text } from '@nextui-org/react';
import React from 'react';
import { Layout, ProjectsCarousel } from '../src/components';

export default function Projects() {
  return (
    <Layout
      pageTitle='Projects'
      pageDescription='There are my projects i worked on this year'
    >
      <Text css={{ marginBottom: '$15' }} h1 color='$blue800'>
        Projects
      </Text>
      <ProjectsCarousel />
    </Layout>
  );
}
