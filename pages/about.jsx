import React from 'react';
import { Box, Layout } from '../src/components';
import { Button, Image, Text, useTheme } from '@nextui-org/react';
import { GrMail, FaRocket, profilePhoto } from '/src/assets';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

export default function About({ activeLink }) {
  const setActive = activeLink[1];
  const router = useRouter();
  const { isDark } = useTheme();

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 1,
      },
    }),
  };

  return (
    <Layout
      pageTitle='About'
      pageDescription='A little about who I am and my education'
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Text css={{ marginBottom: '$15' }} h1 color='$blue800'>
          <FormattedMessage id='about.title' defaultMessage='About me' />
        </Text>
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        exit='hidden'
        custom={{ delay: 0.3 }}
        variants={variants}
      >
        <Text
          css={{
            textAlign: 'center',
            marginBottom: '$18',
          }}
          i
          em
          h2
        >
          <FormattedMessage
            id='about.h2'
            defaultMessage='Hi there! Let me introduce myself...'
          />
        </Text>

        <Box
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '$10',
            gap: '$36',
            '@mdMax': {
              flexDirection: 'column-reverse',
              gap: '$13',
            },
          }}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              size='$xl'
              css={{
                maxWidth: '600px',
                textAlign: 'flex-start',
                '@mdMax': {
                  marginBottom: '$10',
                },

                '@xsMax': {
                  border: '1px solid #3694ff',
                  fontSize: '$lg',
                  padding: '$5',
                  borderRadius: '$md',
                },
              }}
            >
              <FormattedMessage
                id='about.p1'
                defaultMessage=' I am a Full Stack Developer, constantly learning to be able to
              perform a higher quality result in each job. I like to experiment
              and learn about new technologies, programming languages, operating
              systems and new tools. I think I can adapt easily. I have a
              preference for the backend, although I like the frontend a lot
              too. I am interested in blockchain, web3, cryptography and
              cybersecurity, in which I plan to train for it in the near future.'
              />

              <br />
              <br />
            </Text>
            <Text
              size='$xl'
              css={{
                '@mdMax': {
                  textAlign: 'center',
                },
                '@xsMax': {
                  fontSize: '$lg',
                },
              }}
              b
            >
              <FormattedMessage
                id='about.p2'
                defaultMessage='Thank you for taking the time to read about me.'
              />
              <br />
              <FormattedMessage
                id='about.p3'
                defaultMessage='Lets talk, contact me!'
              />
            </Text>
            <Box
              css={{
                display: 'flex',
                maxW: 'inherit',
                gap: '$10',
                '@mdMax': {
                  justifyContent: 'center',
                  marginBottom: '$10',
                },
                '@xsMax': {
                  flexDirection: 'column',
                  gap: '$0',
                },
              }}
            >
              <Button
                css={{
                  marginTop: '$10',
                  zIndex: '$1',
                  width: 'auto',
                  alignSelf: 'center',
                }}
                auto
                onClick={() => {
                  router.push('/contact');
                  setActive('contact');
                }}
                icon={<GrMail size={25} />}
                color='primary'
              >
                <Text color='white' b>
                  <FormattedMessage
                    id='about.getInTouch'
                    defaultMessage='Get in Touch!'
                  />
                </Text>
              </Button>
              <Button
                css={{
                  marginTop: '$10',
                  zIndex: '$1',
                  width: 'auto',
                  alignSelf: 'center',
                }}
                auto
                onClick={() => {
                  router.push('/projects');
                  setActive('projects');
                }}
                icon={<FaRocket size={25} />}
                color='secondary'
              >
                <Text color='white' b>
                  <FormattedMessage
                    id='about.seeProjects'
                    defaultMessage='See my projects!'
                  />
                </Text>
              </Button>
            </Box>
          </Box>

          <Image
            css={{
              maxWidth: '100%',
              filter: 'grayscale(100%)',
              border: isDark ? '3px solid black' : '3px solid transparent',
              borderRadius: '50%',
              transition: 'all 0.5s',
              width: 400,
              height: 400,
              backgroundColor: 'white',
              '&:hover': {
                filter: 'none',
                border: '3px solid #b2b',
              },
              '@xsMax': {
                width: 300,
                height: 300,
              },
            }}
            src={profilePhoto.default.src}
            alt='profilePhoto'
            width='auto'
            height='auto'
          />
        </Box>
      </motion.div>
    </Layout>
  );
}
