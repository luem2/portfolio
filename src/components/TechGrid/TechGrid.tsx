import { Grid, Text, Tooltip } from '@nextui-org/react'
import { motion } from 'framer-motion'

import { techstack } from '../../constants'

import { TechCard } from './TechCard'

export function TechGrid() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, scale: 0 },
        show: { opacity: 1, scale: 1 },
    }

    return (
        <motion.ul animate='show' initial='hidden' variants={container}>
            <Grid.Container gap={2} justify='center'>
                {techstack.map((tech) => (
                    <Grid
                        key={tech.name}
                        md={3}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <motion.li
                            style={{
                                textDecoration: 'bio',
                            }}
                            variants={item}
                        >
                            <Tooltip
                                rounded
                                color='primary'
                                content={
                                    <Text b color='white'>
                                        {tech.name}
                                        {tech.secondLine &&
                                            '/' + tech.secondLine}
                                    </Text>
                                }
                                contentColor='default'
                                css={{
                                    marginTop: '$2',
                                    '@xsMax': { display: 'none' },
                                }}
                            >
                                <TechCard tech={tech} />
                            </Tooltip>
                        </motion.li>
                    </Grid>
                ))}
            </Grid.Container>
        </motion.ul>
    )
}
