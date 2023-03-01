import React from 'react'
import { Button, Row, Text, Image } from '@nextui-org/react'
import { Layout } from '../src/components'
import { AiOutlineComment, BiLinkExternal } from '../src/assets'
import { useRouter } from 'next/router'
import { logo2 } from '../src/assets/'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'

export default function Home({ activeLink }) {
    const setActive = activeLink[1]
    const router = useRouter()

    return (
        <Layout
            pageTitle='Home'
            pageDescription='This is the home page of Luciano Piñol Portfolio.'
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Text
                    h1
                    size={80}
                    css={{
                        textAlign: 'center',
                        textGradient: '45deg, $blue600 -20%, $pink600 50%',
                        '@xsMax': {
                            fontSize: '$5xl',
                        },
                    }}
                >
                    Luciano Piñol
                </Text>
                <Text
                    h4
                    css={{
                        display: 'flex',
                        textAlign: 'center',
                        placeSelf: 'center',
                        marginTop: '-1rem',
                        '@xsMax': {
                            fontSize: '$md',
                        },
                    }}
                >
                    <FormattedMessage
                        id='index.presentation'
                        defaultMessage='Full Stack Developer based in Entre Rios, Argentina.'
                    />
                </Text>
                <motion.div
                    style={{
                        marginTop: '3rem',
                        marginBottom: '1.5rem',
                    }}
                >
                    <Image
                        src={logo2.src}
                        alt='logo-Luem'
                        width={200}
                        height={200}
                    />
                </motion.div>

                <Row
                    justify='center'
                    css={{
                        gap: '$10',
                        marginBottom: '$15',
                    }}
                >
                    <Button
                        css={{
                            zIndex: '$1',
                            marginTop: '$10',
                        }}
                        auto
                        onClick={() => {
                            router.push('/about')
                            setActive('about')
                        }}
                        icon={<BiLinkExternal size={25} />}
                        color='secondary'
                    >
                        <Text b size={16} color='white'>
                            <FormattedMessage
                                id='index.knowMe'
                                defaultMessage='Know me!'
                            />
                        </Text>
                    </Button>
                    <Button
                        css={{
                            zIndex: '$1',
                            marginTop: '$10',
                        }}
                        auto
                        onClick={() => {
                            router.push('/contact')
                            setActive('contact')
                        }}
                        icon={<AiOutlineComment size={25} />}
                        color='primary'
                    >
                        <Text b size={16} color='white'>
                            <FormattedMessage
                                id='index.letsTalk'
                                defaultMessage='Lets Talk'
                            />
                        </Text>
                    </Button>
                </Row>
            </motion.div>
        </Layout>
    )
}
