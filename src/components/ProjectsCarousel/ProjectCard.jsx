import React, { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Text,
  Modal,
  Avatar,
  Container,
  Image,
} from '@nextui-org/react';
import { AiFillInfoCircle } from '/src/assets';
import { ButtonGroup } from '../ButtonGroup';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

export function ProjectCard({ project }) {
  const [active, setActive] = useState(false);
  const modalHandler = () => {
    setActive(!active);
  };

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
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      custom={{ delay: 0.05 }}
      variants={variants}
    >
      <Card
        isPressable
        isHoverable
        variant='shadow'
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
            icon={<AiFillInfoCircle size={25} />}
            css={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: '$20',
              left: '$16',
            }}
            color='gradient'
            auto
            ghost
            shadow
            animated
            onClick={() => modalHandler()}
          >
            <Text b>
              <FormattedMessage
                id='projects.moreInfo'
                defaultMessage='More info'
              />
            </Text>
          </Button>
        </Card.Body>
        <Card.Image
          src={project.src.default.src}
          alt={project.alt}
          objectFit='cover'
          width='100%'
          height={'100%'}
        ></Card.Image>
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
              color='gradient'
              bordered
              css={{
                display: 'flex',
                marginRight: '$4',
                justifyContent: 'center',
              }}
              src={project.logo.default.src}
            />
            <Text h3 b>
              {project.name}
            </Text>
          </Col>
        </Card.Footer>
        <Modal scroll blur closeButton open={active} onClose={modalHandler}>
          <Modal.Header>
            <Text size='$4xl' h3 b>
              <Image
                src={project.logo.default.src}
                alt={project.alt}
                width={100}
                height={100}
              />
              <Container display='flex' justify='center' direction='column'>
                {project.name}
              </Container>
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text b color='#b74aed'>
              <FormattedMessage
                id='projects.description.title'
                defaultMessage='Description:'
              />
            </Text>
            <Text>
              <FormattedMessage
                id={`projects.${project.id}.description`}
                defaultMessage={project.description}
              />
            </Text>
            <Text b color='#b74aed'>
              <FormattedMessage
                id='projects.technologies.title'
                defaultMessage='Technologies:'
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
  );
}
