import React from 'react';

import Link from 'next/link';
import { sidebarData } from '/src/constants.js';
import styles from '/styles/SidebarMenu.module.css';
import { Button, Text, useTheme } from '@nextui-org/react';
import { FormattedMessage } from 'react-intl';

export function SidebarMenu({ activeLink, activeMenu }) {
  const [active, setActive] = activeLink;
  const [openMenu, setOpenMenu] = activeMenu;
  const isDark = useTheme();

  console.log('sidebarData', sidebarData);

  return (
    <nav
      className={
        openMenu
          ? [styles.activeMenu, isDark ? styles.dark : styles.light].join(' ')
          : [styles.disabledMenu, isDark ? styles.dark : styles.light].join(' ')
      }
    >
      <ul>
        {sidebarData.map(item => {
          console.log(item.path, active);

          return (
            <li
              key={item.title}
              onClick={() => {
                setOpenMenu(false);
                setActive(item.path);
              }}
            >
              <Link href={item.path}>
                <a>
                  <Text
                    b
                    size={16}
                    color={active === item.path ? '#bd2c7b' : 'white'}
                  >
                    {item.title}
                  </Text>
                </a>
              </Link>
            </li>
          );
        })}
        <a
          href='/cv-luciano-pinol-fullstack.pdf'
          alt='cv-lucianopinol'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button color='gradient' auto ghost shadow animated>
            <Text b size={16}>
              <FormattedMessage id='navbar.cv' defaultMessage='Download CV' />
            </Text>
          </Button>
        </a>
      </ul>
    </nav>
  );
}

/* 
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
            {collapseItems.map(item => {
              let itemLink;
              let itemId;

              if (item === 'Home') {
                itemLink = '/';
                itemId = 'home';
              } else if (item === 'Tech Stack') {
                itemLink = '/tech-stack';
                itemId = 'techStack';
              } else {
                itemLink = item[0].toLowerCase() + item.slice(1);
                itemId = item[0].toLowerCase() + item.slice(1);
              }

              return (
                <Navbar.CollapseItem
                  key={item}
                  activeColor='secondary'
                  isActive={active === itemLink}
                >
                  <NextLink href={`${itemLink}`}>
                    <Navbar.Link
                      color='inherit'
                      onClick={() => {
                        setIsOpen(false);
                        setActive(itemLink);
                      }}
                    >
                      <FormattedMessage
                        id={`navbar.${itemId}`}
                        defaultMessage={`${item}`}
                      />
                    </Navbar.Link>
                  </NextLink>
                </Navbar.CollapseItem>
              );
            })}
            <Navbar.CollapseItem>
              <a
                href='/cv-luciano-pinol-fullstack.pdf'
                alt='cv-lucianopinol'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button color='gradient' auto ghost shadow animated>
                  <FormattedMessage
                    id='navbar.cv'
                    defaultMessage='Download CV'
                  />
                </Button>
              </a>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
          
*/
