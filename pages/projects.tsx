import { Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'

import { Layout, ProjectsCarousel } from '../src/components'

export default function Projects() {
    return (
        <Layout
            container={{
                marginBottom: '$10',
            }}
            pageDescription='There are my projects i worked on this year'
            pageTitle='Projects'
        >
            <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Text h1 color='$blue800' css={{ marginBottom: '$15' }}>
                    <FormattedMessage
                        defaultMessage='Projects'
                        id='projects.title'
                    />
                </Text>
            </motion.div>
            <ProjectsCarousel />
        </Layout>
    )
}
