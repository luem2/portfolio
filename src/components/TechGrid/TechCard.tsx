import React from 'react'
import { Card, Text, Image } from '@nextui-org/react'

export function TechCard({ tech }) {
    return (
        <Card
            css={{
                display: 'flex',
                justifyContent: 'center',
                background: 'transparent',
                border: '2px solid transparent',
                '&:hover': {
                    border: '2px solid lightblue',
                    borderColor: '$blue500',
                },
            }}
            isHoverable
        >
            <Card.Body>
                <Image
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
            </Card.Body>
        </Card>
    )
}
