import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import { Button, Link, Navbar } from '@nextui-org/react';
import { logo } from '/src/assets';
import { Box } from '../Box';
import { SocialMedia, SocialMediaCompacted } from './SocialMedia';
import styles from '/styles/Navbar.module.css';

export default function NavigateBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('/');

  const collapseItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

  useEffect(() => {
    if (window.location.pathname === '/') {
      setActive('/');
    } else {
      setActive(window.location.pathname.slice(1));
    }
  }, []);

  return (
    <Box
      css={{
        fontFamily: 'Open Sans',
        padding: '$10',
      }}
    >
      <Navbar variant='sticky'>
        <Navbar.Toggle
          isSelected={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          showIn='md'
        />
        <Navbar.Brand hideIn='md'>
          <Navbar.Toggle
            aria-label='toggle navigation'
            onChange={() => !isOpen}
            showIn='md'
            onClick={() => setIsOpen(!isOpen)}
          />
          <NextLink href='/'>
            <a>
              <Image
                className={styles.logo}
                onClick={() => setActive('/')}
                src={logo}
                height={75}
                width={75}
                alt='Luem Logo'
              />
            </a>
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
            <Navbar.Link
              onClick={() => setActive('/')}
              isActive={active === '/'}
            >
              Home
            </Navbar.Link>
          </NextLink>
          <NextLink href='/about'>
            <Navbar.Link
              onClick={() => setActive('about')}
              isActive={active === 'about'}
            >
              About
            </Navbar.Link>
          </NextLink>
          <NextLink href='/tech-stack'>
            <Navbar.Link
              onClick={() => setActive('tech-stack')}
              isActive={active === 'tech-stack'}
            >
              Tech Stack
            </Navbar.Link>
          </NextLink>
          <NextLink href='/projects'>
            <Navbar.Link
              onClick={() => setActive('projects')}
              isActive={active === 'projects'}
            >
              Projects
            </Navbar.Link>
          </NextLink>
          <NextLink href='/contact'>
            <Navbar.Link
              onClick={() => setActive('contact')}
              isActive={active === 'contact'}
            >
              Contact
            </Navbar.Link>
          </NextLink>
          <Button color='gradient' auto ghost shadow animated>
            Download CV
          </Button>
        </Navbar.Content>
        <SocialMediaCompacted />
        <SocialMedia />
        <Navbar.Content>
          <Navbar.Brand showIn={'md'}>
            <NextLink href='/'>
              <a>
                <div className={styles.logo}>
                  <Image
                    className={styles.logo}
                    onClick={() => setActive('/')}
                    src={logo}
                    height={75}
                    width={75}
                    alt='Luem Logo'
                  />
                </div>
              </a>
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
                  isActive={active === itemLink}
                >
                  <NextLink href={`${itemLink}`}>
                    <Link
                      color='inherit'
                      css={{
                        minWidth: '100%',
                        '&:hover': {
                          color: '$pink600',
                          fontWeight: 'bold',
                        },
                      }}
                      onClick={() => {
                        setIsOpen(false);
                        setActive(itemLink);
                      }}
                    >
                      {item}
                    </Link>
                  </NextLink>
                </Navbar.CollapseItem>
              );
            })}
            <Navbar.CollapseItem>
              <Button color='gradient' auto ghost shadow animated>
                Download CV
              </Button>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar.Content>
      </Navbar>
    </Box>
  );
}
