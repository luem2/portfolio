import { useEffect } from 'react'
import Link from 'next/link'
import { Button, Text, useTheme } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

import { sidebarData } from '../constants'

import styles from '/styles/SidebarMenu.module.css'

import { useStore } from '../store/useStore'

export function SidebarMenu() {
    const { cvLang, activeLink, setActiveLink, openMenu, setOpenMenu } =
        useStore()
    const { isDark } = useTheme()

    useEffect(() => {
        if (window.location.pathname === '/') {
            setActiveLink('/')
        } else {
            setActiveLink(window.location.pathname.slice(1))
        }
    }, [setActiveLink])

    return (
        <nav
            className={[
                styles.navMenu,
                openMenu ? styles.activeMenu : styles.disabledMenu,
                isDark ? styles.dark : styles.light,
            ].join(' ')}
        >
            <ul className={styles.ul}>
                {sidebarData.map((item) => {
                    let itemLink

                    item.path === '/'
                        ? (itemLink = '/')
                        : (itemLink = item.path.slice(1))

                    return (
                        <li
                            key={item.title}
                            style={{
                                padding: '0.5rem',
                            }}
                            onClick={() => {
                                setOpenMenu(false)
                                setActiveLink(
                                    item.path === '/'
                                        ? item.path
                                        : item.path.slice(1)
                                )
                            }}
                        >
                            <Link href={item.path}>
                                <a>
                                    <Text
                                        b
                                        css={{
                                            display: 'flex',
                                            padding: '$2',
                                            color:
                                                activeLink === itemLink
                                                    ? '#bd2c7b'
                                                    : isDark
                                                    ? 'white'
                                                    : 'black',
                                        }}
                                        size={20}
                                    >
                                        {item.icon}
                                        <FormattedMessage
                                            defaultMessage={item.title}
                                            id={`navbar.${item.id}`}
                                        />
                                    </Text>
                                </a>
                            </Link>
                        </li>
                    )
                })}
                <a
                    href={cvLang}
                    rel='noopener noreferrer'
                    style={{
                        marginTop: '0.5rem',
                        alignSelf: 'center',
                    }}
                    target='_blank'
                >
                    <Button
                        animated
                        auto
                        ghost
                        shadow
                        color='gradient'
                        css={{
                            justifyContent: 'center',
                        }}
                    >
                        <Text b size={18}>
                            <FormattedMessage
                                defaultMessage='Download CV'
                                id='navbar.cv'
                            />
                        </Text>
                    </Button>
                </a>
            </ul>
        </nav>
    )
}
