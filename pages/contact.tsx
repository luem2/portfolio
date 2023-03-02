import { Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'

import { Form } from '../src/components'
import { Layout } from '../src/components'

export default function Contact() {
    return (
        <Layout
            container={{
                marginBottom: '$10',
            }}
            pageDescription='You can contact me with the follow methods'
            pageTitle='Contact'
        >
            <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
            >
                <Text h1 color='$pink600'>
                    <FormattedMessage
                        defaultMessage='Get in touch'
                        id='contact.title'
                    />
                </Text>
            </motion.div>
            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4 }}
            >
                <Form />
            </motion.div>
        </Layout>
    )
}
