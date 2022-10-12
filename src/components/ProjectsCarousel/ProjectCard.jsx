import React from 'react';
import { Card, Col, Text } from '@nextui-org/react';

export function ProjectCard({ project }) {
  return (
    <Card
      isPressable
      isHoverable
      variant='shadow'
      css={{
        '&:hover': {
          transform: 'scale(1.1)',
          opacity: '0.65',
          transition: 'all 0.5s ease-in-out',
        },
      }}
    >
      <Card.Header
        css={{
          opacity: '0',
          position: 'absolute',
          zIndex: 1,
          top: 5,
          '&:hover': {
            opacity: '1',
          },
        }}
      >
        <Col>
          <Text size={14}>What to Watch</Text>
          <Text h3> Stream the Acme Event</Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={project.src.default.src}
        alt={project.alt}
        objectFit='cover'
        width='100%'
        height={'100%'}
      ></Card.Image>
      <Card.Footer></Card.Footer>
    </Card>
  );
}
