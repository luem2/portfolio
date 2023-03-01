import React from 'react'
import { Grid, Text, Tooltip } from '@nextui-org/react'
import { TechCard } from './TechCard'
import { techstack } from '../../constants'
import { motion } from 'framer-motion'

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
        <motion.ul variants={container} initial='hidden' animate='show'>
            <Grid.Container gap={2} justify='center'>
                {techstack.map((tech) => (
                    <Grid
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        key={tech.name}
                        md={3}
                    >
                        <motion.li
                            variants={item}
                            style={{
                                textDecoration: 'bio',
                            }}
                        >
                            <Tooltip
                                css={{
                                    '@xsMax': { display: 'none' },
                                }}
                                content={
                                    <Text color='white' b>
                                        {tech.name}
                                        {tech.secondLine &&
                                            '/' + tech.secondLine}
                                    </Text>
                                }
                                rounded
                                color='primary'
                                contentColor='default'
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
