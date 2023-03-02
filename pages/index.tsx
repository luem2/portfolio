import { Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'

import { AiOutlineComment, BiLinkExternal } from '../src/assets'
import { Layout } from '../src/components'
import { useStore } from '../src/store/useStore'
import styles from '../styles/HomePage.module.css'
import { ButtonMotion } from '../src/components/Button'

export default function Home() {
    const { setActiveLink } = useStore()

    const router = useRouter()

    return (
        <Layout
            pageDescription='This is the home page of Luciano Piñol Portfolio.'
            pageTitle='Home'
        >
            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 1 }}
            >
                <Text
                    h1
                    css={{
                        textAlign: 'center',
                        textGradient: '45deg, $blue600 -20%, $pink600 50%',
                        '@xsMax': {
                            fontSize: '$5xl',
                        },
                    }}
                    size={80}
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
                        defaultMessage='Full Stack Developer based in Entre Rios, Argentina.'
                        id='index.presentation'
                    />
                </Text>

                {/* AVATAR */}
                <motion.div
                    className={styles.avatar}
                    style={{
                        marginTop: '3rem',
                        marginBottom: '1.5rem',
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                />

                <Row
                    css={{
                        gap: '$10',
                        marginBottom: '$15',
                    }}
                    justify='center'
                >
                    <ButtonMotion
                        backgroundColor='$purple700'
                        formattedMessage={
                            <FormattedMessage
                                defaultMessage='Know me!'
                                id='index.knowMe'
                            />
                        }
                        icon={<BiLinkExternal size={25} />}
                        styles={{
                            zIndex: '$1',
                            marginTop: '$10',
                        }}
                        type='button'
                        onPress={() => {
                            router.push('/about')
                            setActiveLink('about')
                        }}
                    />
                    <ButtonMotion
                        formattedMessage={
                            <FormattedMessage
                                defaultMessage='Lets Talk!'
                                id='index.letsTalk'
                            />
                        }
                        icon={<AiOutlineComment size={25} />}
                        styles={{
                            zIndex: '$1',
                            marginTop: '$10',
                        }}
                        type='button'
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
