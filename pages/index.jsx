import { Button, Row, Text } from '@nextui-org/react';
import { Layout } from '../src/components';
import { AiOutlineComment, BiLinkExternal } from '/src/assets';
import { useRouter } from 'next/router';

export default function Home({ activeLink }) {
  const setActive = activeLink[1];
  const router = useRouter();

  return (
    <Layout
      pageTitle='Home'
      pageDescription='This is the home page of Luciano Piñol Portfolio.'
    >
      <Text
        h1
        size={80}
        css={{
          textAlign: 'center',
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
      >
        Luciano Piñol
      </Text>
      <Text
        css={{
          textAlign: 'center',
        }}
        b
      >
        Full Stack Developer based in Entre Ríos, Argentina.
      </Text>
      <Row
        justify='center'
        css={{
          gap: '$10',
        }}
      >
        <Button
          css={{
            zIndex: '$1',
            marginTop: '$10',
          }}
          auto
          onClick={() => {
            router.push('/about');
            setActive('about');
          }}
          icon={<BiLinkExternal size={25} />}
          color='secondary'
        >
          <Text b size={16} color='white'>
            Know me!
          </Text>
        </Button>
        <Button
          css={{
            zIndex: '$1',
            marginTop: '$10',
          }}
          auto
          onClick={() => {
            router.push('/contact');
            setActive('contact');
          }}
          icon={<AiOutlineComment size={25} />}
          color='primary'
        >
          <Text b size={16} color='white'>
            Lets Talk
          </Text>
        </Button>
      </Row>
    </Layout>
  );
}
