import React from 'react';
import { Layout, TechGrid } from '/src/components';
import { Text } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function TechStack() {
  return (
    <Layout
      pageTitle='Tech Stack'
      pageDescription='This is my technologies stack for development'
    >
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Text css={{ marginBottom: '$15' }} h1 color='$pink600'>
          Tech Stack
        </Text>
      </motion.h1>
      <TechGrid />
    </Layout>
  );
}
