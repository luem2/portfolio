import React, { useEffect } from 'react';

import Link from 'next/link';
import { sidebarData } from '/src/constants.js';
import { Button, Text, useTheme } from '@nextui-org/react';
import { FormattedMessage } from 'react-intl';
import styles from '/styles/SidebarMenu.module.css';

export function SidebarMenu({ activeLink, activeMenu }) {
  const [active, setActive] = activeLink;
  const [openMenu, setOpenMenu] = activeMenu;
  const isDark = useTheme();

  useEffect(() => {
    if (window.location.pathname === '/') {
      setActive('/');
    } else {
      setActive(window.location.pathname.slice(1));
    }
  }, [setActive]);

  return (
    <nav
      className={
        openMenu
          ? [styles.activeMenu, isDark ? styles.dark : styles.light].join(' ')
          : styles.disabledMenu
      }
    >
      <ul className={styles.ul}>
        {sidebarData.map(item => {
          return (
            <li
              style={{
                padding: '0.5rem',
              }}
              key={item.title}
              onClick={() => {
                setOpenMenu(false);
                setActive(item.path);
              }}
            >
              <Link href={item.path}>
                <a>
                  <Text
                    css={{
                      display: 'flex',
                      padding: '$2',
                      color: active === item.path ? '#bd2c7b' : 'white',
                    }}
                    b
                    size={20}
                  >
                    {item.icon}
                    <FormattedMessage
                      id={`navbar.${item.id}`}
                      defaultMessage={item.title}
                    />
                  </Text>
                </a>
              </Link>
            </li>
          );
        })}
        <a
          style={{
            marginTop: '0.5rem',
            alignSelf: 'center',
          }}
          href='/cv-luciano-pinol-fullstack.pdf'
          alt='cv-lucianopinol'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            css={{
              justifyContent: 'center',
            }}
            color='gradient'
            auto
            ghost
            shadow
            animated
          >
            <Text b size={18}>
              <FormattedMessage id='navbar.cv' defaultMessage='Download CV' />
            </Text>
          </Button>
        </a>
      </ul>
    </nav>
  );
}
