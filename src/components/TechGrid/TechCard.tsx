import React from 'react'
import { Card, Text, Image } from '@nextui-org/react'
import styles from '../../../styles/TechCard.module.css'

export function TechCard({ tech }) {
    return (
        <Card
            css={{
                background: 'transparent',
            }}
            isHoverable
        >
            <Card.Body>
                <Image
                    className={styles.tech}
                    css={{
                        backgroundColor: tech.dark && 'white',
                    }}
                    src={tech.img.src}
                    alt={tech.name}
                    width={80}
                    height={80}
                />
                <Text
                    css={{
                        marginTop: '$3',
                        placeSelf: 'center',
                    }}
                    em
                    showIn='md'
                    b
                >
                    {tech.name}
                </Text>
                {tech.secondLine && (
                    <Text em b showIn='md'>
                        {tech.secondLine}
                    </Text>
                )}
            </Card.Body>
        </Card>
    )
}
