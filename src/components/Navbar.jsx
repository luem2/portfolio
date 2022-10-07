import React, { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/Link';
import { useTheme as useNextTheme } from 'next-themes';
import {
  Button,
  Link,
  Navbar,
  Switch,
  Text,
  useTheme,
} from '@nextui-org/react';
import {
  logo,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  BsFillSunFill,
  BsFillMoonFill,
  GrMail,
} from '/src/assets';
import { Layout } from '/src/components';
import { Box } from './Box';
export default function NavigateBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  const collapseItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

  return (
    <Box>
      <Navbar variant='sticky'>
        <Navbar.Toggle
          onChange={() => !isOpen}
          showIn='md'
          onClick={() => setIsOpen(!isOpen)}
        />
        <Navbar.Brand hideIn='md'>
          <Navbar.Toggle
            aria-label='toggle navigation'
            onChange={() => !isOpen}
            showIn='md'
            onClick={() => setIsOpen(!isOpen)}
          />
          <NextLink href='/'>
            <Image src={logo} height={75} width={75} alt='Luem Logo' />
          </NextLink>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          isCursorHighlightRounded
          activeColor='secondary'
          hideIn='md'
          variant='highlight'
          underlineHeight
        >
          <NextLink href='/'>
            <Navbar.Link isActive={true}>Home</Navbar.Link>
          </NextLink>
          <NextLink href='/about'>
            <Navbar.Link>About</Navbar.Link>
          </NextLink>
          <NextLink href='/tech-stack'>
            <Navbar.Link>Tech Stack</Navbar.Link>
          </NextLink>
          <NextLink href='/projects'>
            <Navbar.Link>Projects</Navbar.Link>
          </NextLink>
          <NextLink href='/contact'>
            <Navbar.Link>Contact</Navbar.Link>
          </NextLink>
          <Button color='secondary' auto>
            Download CV
          </Button>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <AiFillLinkedin size={25} />
          </Navbar.Item>
          <Navbar.Item>
            <AiOutlineTwitter size={25} />
          </Navbar.Item>

          <Navbar.Item>
            <AiFillGithub size={25} />
          </Navbar.Item>
          <Navbar.Item>
            <GrMail size={25} />
          </Navbar.Item>
          <Navbar.Item>
            <Switch
              checked={isDark}
              color='secondary'
              size='md'
              iconOff={<BsFillMoonFill size={20} />}
              iconOn={<BsFillSunFill size={20} />}
              onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
            />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Brand showIn={'md'}>
            <NextLink href='/'>
              <Image src={logo} height={75} width={75} alt='Luem Logo' />
            </NextLink>
          </Navbar.Brand>
          <Navbar.Collapse isOpen={isOpen}>
            {collapseItems.map((item, index) => {
              let itemLink;

              if (item === 'Home') {
                itemLink = '/';
              } else if (item === 'Tech Stack') {
                itemLink = '/tech-stack';
              } else {
                itemLink = item[0].toLowerCase() + item.slice(1);
              }

              return (
                <Navbar.CollapseItem
                  key={item}
                  activeColor='secondary'
                  css={{
                    color: index === collapseItems.length - 1 ? 'warning' : '',
                  }}
                  isActive={index === item.indexOf()}
                >
                  <NextLink href={`${itemLink}`}>
                    <Link
                      color='inherit'
                      css={{
                        minWidth: '100%',
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </NextLink>
                </Navbar.CollapseItem>
              );
            })}
            <Navbar.CollapseItem>
              <Button color='secondary' auto ripple animated>
                Download CV
              </Button>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar.Content>
      </Navbar>
    </Box>
  );
}
