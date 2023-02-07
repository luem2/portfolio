import React from 'react'
import { Button, Text } from '@nextui-org/react'
import { AiFillGithub, BiLinkExternal } from '../assets'
import { FormattedMessage } from 'react-intl'

export function ButtonGroup({ project }) {
    return (
        <>
            <Button.Group
                css={{
                    marginRight: '$13',
                    gap: '$5',
                }}
                color='gradient'
                ghost
            >
                <a href={project.gh} target='_blank' rel='noreferrer'>
                    <Button icon={<AiFillGithub size={20} />}>
                        <Text b>
                            <FormattedMessage
                                id='projects.repository'
                                defaultMessage='Repository'
                            />
                        </Text>
                    </Button>
                </a>
                <a href={project.web} target='_blank' rel='noreferrer'>
                    <Button icon={<BiLinkExternal size={20} />}>
                        <Text b>
                            <FormattedMessage
                                id='projects.website'
                                defaultMessage='Website'
                            />
                        </Text>
                    </Button>
                </a>
            </Button.Group>
        </>
    )
}
