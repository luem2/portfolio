import type { IProject } from '../../types/types'

import { Button, Text } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

import { AiFillGithub, BiLinkExternal } from '../assets'

interface Props {
    project: IProject
}

export function ButtonGroup({ project }: Props) {
    return (
        <>
            <Button.Group
                ghost
                color='gradient'
                css={{
                    marginRight: '$13',
                    gap: '$5',
                }}
            >
                <a href={project.gh} rel='noreferrer' target='_blank'>
                    <Button icon={<AiFillGithub size={20} />}>
                        <Text b>
                            <FormattedMessage
                                defaultMessage='Repository'
                                id='projects.repository'
                            />
                        </Text>
                    </Button>
                </a>
                <a href={project.web} rel='noreferrer' target='_blank'>
                    <Button icon={<BiLinkExternal size={20} />}>
                        <Text b>
                            <FormattedMessage
                                defaultMessage='Website'
                                id='projects.website'
                            />
                        </Text>
                    </Button>
                </a>
            </Button.Group>
        </>
    )
}
