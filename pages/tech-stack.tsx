import { Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'

import { Layout, TechGrid } from '../src/components'

export default function TechStack() {
    return (
        <Layout
            pageDescription='This is my technologies stack for development'
            pageTitle='Tech Stack'
        >
            <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Text h1 color='$pink600' css={{ marginBottom: '$15' }}>
                    <FormattedMessage
                        defaultMessage='Tech Stack'
                        id='techStack.title'
                    />
                </Text>
            </motion.div>
            <TechGrid />
        </Layout>
    )
}
