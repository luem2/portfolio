import React from 'react'
import { Row, Text } from '@nextui-org/react'
import { Layout } from '../src/components'
import { AiOutlineComment, BiLinkExternal } from '../src/assets'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'
import { useStore } from '../src/store/useStore'
import styles from '../styles/HomePage.module.css'
import { ButtonMotion } from '../src/components/Button'

export default function Home() {
    const { setActiveLink } = useStore()

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

                {/* AVATAR */}
                <motion.div
                    whileTap={{
                        scale: 0.9,
                    }}
                    className={styles.avatar}
                    style={{
                        marginTop: '3rem',
                        marginBottom: '1.5rem',
                    }}
                />

                <Row
                    justify='center'
                    css={{
                        gap: '$10',
                        marginBottom: '$15',
                    }}
                >
                    <ButtonMotion
                        styles={{
                            zIndex: '$1',
                            marginTop: '$10',
                        }}
                        backgroundColor='$purple700'
                        type='button'
                        formattedMessage={
                            <FormattedMessage
                                id='index.knowMe'
                                defaultMessage='Know me!'
                            />
                        }
                        icon={<BiLinkExternal size={25} />}
                        onPress={() => {
                            router.push('/about')
                            setActiveLink('about')
                        }}
                    />
                    <ButtonMotion
                        styles={{
                            zIndex: '$1',
                            marginTop: '$10',
                        }}
                        type='button'
                        formattedMessage={
                            <FormattedMessage
                                id='index.letsTalk'
                                defaultMessage='Lets Talk!'
                            />
                        }
                        icon={<AiOutlineComment size={25} />}
                        onPress={() => {
                            router.push('/contact')
                            setActiveLink('contact')
                        }}
                    />
                </Row>
            </motion.div>
        </Layout>
    )
}
