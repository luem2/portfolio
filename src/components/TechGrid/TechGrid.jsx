import React from 'react';
import { Grid, Text, Tooltip } from '@nextui-org/react';
import { TechCard } from './TechCard';
import { techstack } from '/src/constants.js';

export function TechGrid() {
  return (
    <Grid.Container
      css={{
        '@xsMax': {
          height: '40rem',
          overflowY: 'scroll',
        },
      }}
      gap={2}
      justify='center'
    >
      {techstack.map(tech => (
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          key={tech.name}
          md={3}
        >
          <Tooltip
            content={
              <Text color='white' b>
                {tech.name}
              </Text>
            }
            rounded
            color='primary'
            contentColor='default'
          >
            <TechCard tech={tech} />
          </Tooltip>
        </Grid>
      ))}
    </Grid.Container>
  );
}
