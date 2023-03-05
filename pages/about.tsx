import { Image, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'

import { GrMail, FaRocket, profilePhoto } from '../src/assets'
import { Box, Layout } from '../src/components'
import { useStore } from '../src/store/useStore'
import { ButtonMotion } from '../src/components/Button'

export default function About() {
    const { setActiveLink } = useStore()

    const router = useRouter()

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
    }

    return (
        <Layout
            pageDescription='A little about who I am and my education'
            pageTitle='About'
        >
            <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Text h1 color='$blue800' css={{ marginBottom: '$15' }}>
                    <FormattedMessage
                        defaultMessage='About me'
                        id='about.title'
                    />
                </Text>
            </motion.div>

            <motion.div
                animate='visible'
                custom={{ delay: 0.3 }}
                exit='hidden'
                initial='hidden'
                variants={variants}
            >
                <Text
                    em
                    h2
                    i
                    css={{
                        textAlign: 'center',
                        marginBottom: '$18',
                    }}
                >
                    <FormattedMessage
                        defaultMessage='Hi there! Let me introduce myself...'
                        id='about.h2'
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
                            size='$xl'
                        >
                            <FormattedMessage
                                defaultMessage=' I am a Full Stack Developer, constantly learning to be able to
              perform a higher quality result in each job. I like to experiment
              and learn about new technologies, programming languages, operating
              systems and new tools. I think I can adapt easily. I have a
preference for the backend, although I like the frontend a lot
              too. I am interested in blockchain, web3, cryptography and
              cybersecurity, in which I plan to train for it in the near future.'
                                id='about.p1'
                            />

                            <br />
                            <br />
                        </Text>
                        <Text
                            b
                            css={{
                                '@mdMax': {
                                    textAlign: 'center',
                                },
                                '@xsMax': {
                                    fontSize: '$lg',
                                },
                            }}
                            size='$xl'
                        >
                            <FormattedMessage
                                defaultMessage='Thank you for taking the time to read about me.'
                                id='about.p2'
                            />
                            <br />
                            <FormattedMessage
                                defaultMessage='Lets talk, contact me!'
                                id='about.p3'
                            />
                        </Text>
                        <Box
                            css={{
                                display: 'flex',
                                maxW: 'inherit',
                                gap: '$10',
                                '@mdMax': {
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: '$10',
                                },
                                '@xsMax': {
                                    flexDirection: 'column',
                                    gap: '$0',
                                },
                            }}
                        >
                            {/* Buttons */}

                            <ButtonMotion
                                formattedMessage={
                                    <FormattedMessage
                                        defaultMessage='Get in Touch!'
                                        id='about.getInTouch'
                                    />
                                }
                                icon={<GrMail size={25} />}
                                styles={{
                                    marginTop: '$10',
                                    zIndex: '$1',
                                    width: 'auto',
                                    alignSelf: 'center',
                                }}
                                type='button'
                                onPress={() => {
                                    router.push('/contact')
                                    setActiveLink('contact')
                                }}
                            />
                            <ButtonMotion
                                backgroundColor='$purple700'
                                formattedMessage={
                                    <FormattedMessage
                                        defaultMessage='See my projects!'
                                        id='about.seeProjects'
                                    />
                                }
                                icon={<FaRocket size={25} />}
                                styles={{
                                    marginTop: '$10',
                                    zIndex: '$1',
                                    width: 'auto',
                                    alignSelf: 'center',
                                }}
                                type='button'
                                onPress={() => {
                                    router.push('/projects')
                                    setActiveLink('projects')
                                }}
                            />
                        </Box>
                    </Box>

                    <Image
                        alt='profilePhoto'
                        css={{
                            maxWidth: '100%',
                            filter: 'none',
                            border: '3px solid #b2b',
                            borderRadius: '50%',
                            transition: 'all 0.5s',
                            width: 400,
                            height: 400,
                            backgroundColor: 'white',
                            '&:hover': {
                                filter: 'grayscale(100%)',
                            },
                            '@xsMax': {
                                width: 300,
                                height: 300,
                            },
                        }}
                        height='auto'
                        src={profilePhoto.src}
                        width='auto'
                    />
                </Box>
            </motion.div>
        </Layout>
    )
}
