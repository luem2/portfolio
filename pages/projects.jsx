import React from 'react';
import { Layout, ProjectsCarousel } from '../src/components';
import { Text } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

export default function Projects() {
  return (
    <Layout
      pageTitle='Projects'
      pageDescription='There are my projects i worked on this year'
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Text css={{ marginBottom: '$15' }} h1 color='$blue800'>
          <FormattedMessage id='projects.title' defaultMessage='Projects' />
        </Text>
      </motion.div>
      <ProjectsCarousel />
    </Layout>
  );
}
