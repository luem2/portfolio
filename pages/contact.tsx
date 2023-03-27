import { Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'

import { gradient2, gradient4 } from '../src/assets'
import { Box, Form } from '../src/components'
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
            <Box
                css={{
                    position: 'absolute',
                    top: '$0',
                    left: '$0',
                    zIndex: '$0',
                }}
            >
                <Image
                    alt='gradient-projects'
                    height={920}
                    src={gradient2}
                    width={800}
                />
            </Box>
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
            <Box
                css={{
                    position: 'absolute',
                    right: '$0',
                    bottom: '$0',
                    zIndex: '$0',
                }}
            >
                <Image
                    alt='gradient-projects'
                    height={1200}
                    src={gradient4}
                    width={800}
                />
            </Box>
        </Layout>
    )
}
