import type { ITech } from '../../../types/types'

import { Card, Text, Image } from '@nextui-org/react'

import styles from '../../../styles/TechCard.module.css'

interface Props {
    tech: ITech
}

export function TechCard({ tech }: Props) {
    return (
        <Card
            isHoverable
            css={{
                background: 'transparent',
            }}
        >
            <Card.Body>
                <Image
                    alt={tech.name}
                    className={styles.tech}
                    css={{
                        backgroundColor: tech.dark && 'white',
                    }}
                    height={80}
                    src={tech.img.src}
                    width={80}
                />
                <Text
                    b
                    em
                    css={{
                        marginTop: '$3',
                        placeSelf: 'center',
                    }}
                    showIn='md'
                >
                    {tech.name}
                </Text>
                {tech.secondLine && (
                    <Text b em showIn='md'>
                        {tech.secondLine}
                    </Text>
                )}
            </Card.Body>
        </Card>
    )
}
