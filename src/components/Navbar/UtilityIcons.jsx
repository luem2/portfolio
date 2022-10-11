import React from 'react';
import { Button, Navbar, Switch } from '@nextui-org/react';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  BsFillSunFill,
  BsFillMoonFill,
  FaTelegramPlane,
  IoShareSocialSharp,
  VscColorMode,
  MdGTranslate,
} from '/src/assets';
import { Popover } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useTheme } from '@nextui-org/react';

export function UtilityIcons() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <>
      <Navbar.Content
        css={{
          padding: '$4',
        }}
        hideIn='xs'
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
            href='https://t.me/luem02'
            target='_blank'
            rel='noreferrer'
          >
            <FaTelegramPlane size={25} />
          </a>
        </Navbar.Item>
        <Navbar.Item>
          <Popover>
            <Popover.Trigger>
              <MdGTranslate size={25} />
            </Popover.Trigger>
            <Popover.Content>
              <button>Hola</button>
            </Popover.Content>
          </Popover>
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

export function UtilityIconsCompacted() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Navbar.Content showIn='xs'>
      <Popover>
        <Popover.Trigger>
          <Button color='gradient' auto ghost shadow animated>
            <IoShareSocialSharp size={20} />
            <MdGTranslate
              style={{
                marginLeft: '10px',
              }}
              size={20}
            />
            <VscColorMode
              style={{
                marginLeft: '10px',
              }}
              size={20}
            />
          </Button>
        </Popover.Trigger>

        <Popover.Content
          css={{
            padding: '$5',
          }}
        >
          <a
            style={{
              paddingRight: '10px',
              color: isDark ? 'white' : '#1F1F1F',
            }}
            href='https://www.linkedin.com/in/lucianopinol'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin size={25} />
          </a>
          <a
            style={{
              paddingRight: '10px',
              color: isDark ? 'white' : '#1F1F1F',
            }}
            href='https://www.github.com/luem2'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub size={25} />
          </a>
          <a
            style={{
              paddingRight: '10px',
              color: isDark ? 'white' : '#1F1F1F',
            }}
            href='https://www.twitter.com/luem08'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineTwitter size={25} />
          </a>
          <a
            style={{
              paddingRight: '10px',
              color: isDark ? 'white' : '#1F1F1F ',
            }}
            href='https://t.me/luem02'
            target='_blank'
            rel='noreferrer'
          >
            <FaTelegramPlane size={25} />
          </a>
          <Switch
            checked={isDark}
            color='secondary'
            size='md'
            iconOff={<BsFillMoonFill />}
            iconOn={<BsFillSunFill />}
            onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </Popover.Content>
      </Popover>
    </Navbar.Content>
  );
}
