import type { IProject } from '../../../types/types'

import { useState } from 'react'
import {
    Button,
    Card,
    Col,
    Text,
    Modal,
    Avatar,
    Container,
    Image,
} from '@nextui-org/react'
import { motion } from 'framer-motion'
import { FormattedMessage } from 'react-intl'

import { AiFillInfoCircle } from '../../assets'
import { ButtonGroup } from '../ButtonGroup'

interface Props {
    project: IProject
}

export function ProjectCard({ project }: Props) {
    const [active, setActive] = useState(false)
    const modalHandler = () => {
        setActive(!active)
    }

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: ({ delay }) => ({
            opacity: 1,
            transition: {
                delay,
                duration: 1,
            },
        }),
    }

    return (
        <motion.div
            animate='visible'
            custom={{ delay: 0.05 }}
            exit='hidden'
            initial='hidden'
            variants={variants}
        >
            <Card
                isHoverable
                isPressable
                css={{
                    position: 'relative',
                    marginTop: '$13',
                    marginBottom: '$13',
                    '&:hover': {
                        transform: 'scale(1.1)',
                        opacity: '0.65',
                        transition: 'all 0.5s ease-in-out',
                    },
                }}
                variant='shadow'
                onClick={() => modalHandler()}
            >
                <Card.Body
                    css={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        height: '100%',
                        opacity: '0',
                        zIndex: '$1',
                        '&:hover': {
                            opacity: '1',
                        },
                        '@mdMax': {
                            display: 'none',
                        },
                    }}
                >
                    <ButtonGroup project={project} />
                    <Button
                        animated
                        auto
                        ghost
                        shadow
                        color='gradient'
                        css={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: '$20',
                            left: '$16',
                        }}
                        icon={<AiFillInfoCircle size={25} />}
                        onClick={() => modalHandler()}
                    >
                        <Text b>
                            <FormattedMessage
                                defaultMessage='More info'
                                id='projects.moreInfo'
                            />
                        </Text>
                    </Button>
                </Card.Body>
                <Card.Image
                    alt={project.alt}
                    height={'100%'}
                    objectFit='cover'
                    src={project.src.src}
                    width='100%'
                />
                <Card.Footer>
                    <Col
                        css={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                        }}
                    >
                        <Avatar
                            bordered
                            color='gradient'
                            css={{
                                display: 'flex',
                                marginRight: '$4',
                                justifyContent: 'center',
                            }}
                            src={project.logo.src}
                        />
                        <Text b h3>
                            {project.name}
                        </Text>
                    </Col>
                </Card.Footer>
                <Modal
                    blur
                    closeButton
                    scroll
                    open={active}
                    onClose={modalHandler}
                >
                    <Modal.Header>
                        <Text b h3 size='$4xl'>
                            <Image
                                alt={project.alt}
                                height={100}
                                src={project.logo.src}
                                width={100}
                            />
                            <Container
                                direction='column'
                                display='flex'
                                justify='center'
                            >
                                {project.name}
                            </Container>
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <Text b color='#b74aed'>
                            <FormattedMessage
                                defaultMessage='Description:'
                                id='projects.description.title'
                            />
                        </Text>
                        <Text>
                            <FormattedMessage
                                defaultMessage={project.description}
                                id={`projects.${project.id}.description`}
                            />
                        </Text>
                        <Text b color='#b74aed'>
                            <FormattedMessage
                                defaultMessage='Technologies:'
                                id='projects.technologies.title'
                            />
                        </Text>
                        <li>
                            Frontend:
                            <Text>{project.technologies.frontend}</Text>
                        </li>
                        <li>
                            Backend:
                            <Text>{project.technologies.backend}</Text>
                        </li>
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonGroup project={project} />
                    </Modal.Footer>
                </Modal>
            </Card>
        </motion.div>
    )
}
