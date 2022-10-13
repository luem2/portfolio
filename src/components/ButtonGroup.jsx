import React from 'react';
import { Button, Text } from '@nextui-org/react';
import { AiFillGithub, BiLinkExternal } from '/src/assets';

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
            <Text b>Repository</Text>
          </Button>
        </a>
        <a href={project.web} target='_blank' rel='noreferrer'>
          <Button icon={<BiLinkExternal size={20} />}>
            <Text b>Website</Text>
          </Button>
        </a>
      </Button.Group>
    </>
  );
}
