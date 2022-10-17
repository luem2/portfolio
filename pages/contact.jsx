import React from 'react';
import { Text, useTheme } from '@nextui-org/react';
import { Form } from '../src/components';
import { GrMail } from '/src/assets';
import { Layout } from '/src/components';

export default function Contact({ activeLink }) {
  const { isDark } = useTheme();

  return (
    <Layout
      pageTitle='Contact'
      pageDescription='You can contact me with the follow methods'
    >
      <Text h1 color='$pink600'>
        Get in touch <GrMail color={isDark ? 'white' : 'black'} size={40} />
      </Text>

      <Form activeLink={activeLink} />
    </Layout>
  );
}
