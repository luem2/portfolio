import React from 'react'
import { Text, useTheme } from '@nextui-org/react'
import { Form } from '../src/components'
import { Layout } from '../src/components'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'

export default function Contact() {
    const { isDark } = useTheme()

    return (
        <Layout
            pageTitle='Contact'
            pageDescription='You can contact me with the follow methods'
            container={{
                marginBottom: '$10',
            }}
        >
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Text h1 color='$pink600'>
                    <FormattedMessage
                        id='contact.title'
                        defaultMessage='Get in touch'
                    />
                </Text>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Form />
            </motion.div>
        </Layout>
    )
}
