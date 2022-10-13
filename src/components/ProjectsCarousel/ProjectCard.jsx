import React, { useState } from 'react';
import { Button, Card, Col, Text, Modal, Avatar } from '@nextui-org/react';
import { AiFillGithub, BiLinkExternal, AiFillInfoCircle } from '/src/assets';

export function ProjectCard({ project }) {
  const [active, setActive] = useState(false);
  const modalHandler = () => {
    setActive(!active);
  };

  return (
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
        }}
      >
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
              <Text b>Repository</Text>
            </Button>
          </a>
          <a href={project.web} target='_blank' rel='noreferrer'>
            <Button icon={<BiLinkExternal size={20} />}>
              <Text b>Website</Text>
            </Button>
          </a>
        </Button.Group>
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
          <Text b>More info</Text>
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
      <Modal blur closeButton open={active} onClose={modalHandler}>
        <Modal.Header>
          <Text>Buenas pa {project.name}</Text>
        </Modal.Header>
        <Modal.Body>HOLA PA</Modal.Body>
        <Modal.Footer>Soy un Footardo pa </Modal.Footer>
      </Modal>
    </Card>
  );
}
