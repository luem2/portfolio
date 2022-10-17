import { Button, Col, Text } from '@nextui-org/react';
import { Layout } from '../src/components';
import { BiLinkExternal } from '/src/assets';
import { useRouter } from 'next/router';

export default function Home({ activeLink }) {
  const setActive = activeLink[1];
  const router = useRouter();

  return (
    <Layout
      pageTitle='Home'
      pageDescription='This is the home page of Luciano Piñol Portfolio.'
    >
      <Col>
        <Text>Hi, Welcome! I am</Text>
        <Text
          h1
          size={80}
          css={{
            textAlign: 'center',
            marginTop: 40,
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
        >
          Luciano Piñol
        </Text>
        <Text textAlign weight='medium'>
          Hi, im a Full Stack Developer based in Entre Ríos, Argentina.
        </Text>
        <Button
          css={{
            zIndex: '$1',
          }}
          auto
          onClick={() => {
            router.push('/about');
            setActive('about');
          }}
          icon={<BiLinkExternal size={25} />}
          color='secondary'
        >
          <Text>Know me!</Text>
        </Button>
      </Col>
    </Layout>
  );
}
