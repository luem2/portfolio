import { Text } from '@nextui-org/react';
import { Layout } from '../src/components';

export default function Home() {
  return (
    <Layout
      pageTitle='Home'
      pageDescription='This is the home page of my Portfolio.'
    >
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
      <Text weight='bold'>
        Hi, im a Full Stack Developer based in Entre Ríos, Argentina.
      </Text>
    </Layout>
  );
}
