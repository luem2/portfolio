import React from 'react';
import { Navbar, Switch } from '@nextui-org/react';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  BsFillSunFill,
  BsFillMoonFill,
  GrMail,
} from '/src/assets';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';

export function SocialMedia() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <>
      <Navbar.Content
        css={{
          padding: '$4',
        }}
      >
        <Navbar.Item
          css={{
            display: 'flex',
            transition: 'all 300ms ease-in-out',
            '&:hover': {
              cursor: 'pointer',
              opacity: '0.5',
            },
          }}
        >
          <a
            style={{
              color: isDark ? 'white' : '#1F1F1F',
            }}
            href='https://www.linkedin.com/in/lucianopinol'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin size={25} />
          </a>
        </Navbar.Item>
        <Navbar.Item
          css={{
            transition: 'all 300ms ease-in-out',
            '&:hover': {
              cursor: 'pointer',
              opacity: '0.5',
              transition: '200ms',
            },
          }}
        >
          <a
            style={{
              color: isDark ? 'white' : '#1F1F1F',
            }}
            href='https://www.github.com/luem2'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub size={25} />
          </a>
        </Navbar.Item>
        <Navbar.Item
          css={{
            transition: 'all 300ms ease-in-out',
            '&:hover': {
              cursor: 'pointer',
              opacity: '0.5',
              transition: '200ms',
            },
          }}
        >
          <a
            style={{
              color: isDark ? 'white' : '#1F1F1F',
            }}
            href='https://www.twitter.com/luem08'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineTwitter size={25} />
          </a>
        </Navbar.Item>
        <Navbar.Item
          css={{
            transition: 'all 300ms ease-in-out',
            '&:hover': {
              cursor: 'pointer',
              opacity: '0.5',
              transition: '200ms',
            },
          }}
        >
          <a
            style={{
              color: isDark ? 'white' : '#1F1F1F ',
            }}
            href='mailto:dev@lucianopinol.com'
          >
            <GrMail size={25} />
          </a>
        </Navbar.Item>
        <Navbar.Item>
          <Switch
            checked={isDark}
            color='secondary'
            size='md'
            iconOff={<BsFillMoonFill />}
            iconOn={<BsFillSunFill />}
            onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </Navbar.Item>
      </Navbar.Content>
    </>
  );
}
