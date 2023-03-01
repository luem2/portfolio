import React, { useEffect, useState } from 'react'
import { Image } from '@nextui-org/react'
import NextLink from 'next/link'
import { Button, Navbar } from '@nextui-org/react'
import { logo } from '../../assets'
import { UtilityIcons, UtilityIconsCompacted } from './UtilityIcons'
import { FormattedMessage } from 'react-intl'
import { HamburgerButton } from '../HamburgerButton'
import styles from '/styles/Navbar.module.css'
import { CV_SPANISH } from '../../constants'
import { useCvStore } from '../../store/useCvStore'

export default function NavigateBar({ activeLink, activeMenu }) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { cvLang } = useCvStore()

    const [active, setActive] = activeLink
    const sidebarMenuIsOpen = activeMenu[0]

    const hoverStyle = {
        minWidth: '100%',
        '&:hover': {
            color: '$pink600',
            fontWeight: 'bold',
        },
    }

    useEffect(() => {
        if (window.location.pathname === '/') {
            setActive('/')
        } else {
            setActive(window.location.pathname.slice(1))
        }
    }, [setActive])

    return (
        <Navbar
            css={{
                fontFamily: 'Open Sans',
                padding: '$5',
                '@mdMax': {
                    padding: '$0',
                },
            }}
            variant='sticky'
            shouldHideOnScroll={sidebarMenuIsOpen ? false : true}
        >
            {/* HAMBURGER BUTTON*/}
            <Navbar.Content showIn='md'>
                <HamburgerButton activeMenu={activeMenu} />
            </Navbar.Content>

            {/* LOGO */}
            <Navbar.Content hideIn='md'>
                <Navbar.Brand>
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
                                src={logo.src}
                                height={75}
                                width={75}
                                alt='Luem Logo'
                            />
                        </a>
                    </NextLink>
                </Navbar.Brand>
            </Navbar.Content>

            {/* NAVIGATION */}
            <Navbar.Content
                isCursorHighlightRounded
                activeColor='secondary'
                hideIn='md'
                variant='underline-rounded'
            >
                <NextLink href='/'>
                    <Navbar.Link
                        onClick={() => setActive('/')}
                        isActive={active === '/'}
                        css={hoverStyle}
                    >
                        <FormattedMessage
                            id='navbar.home'
                            defaultMessage='Home'
                        />
                    </Navbar.Link>
                </NextLink>
                <NextLink href='/about'>
                    <Navbar.Link
                        onClick={() => setActive('about')}
                        isActive={active === 'about'}
                        css={hoverStyle}
                    >
                        <FormattedMessage
                            id='navbar.about'
                            defaultMessage='About'
                        />
                    </Navbar.Link>
                </NextLink>
                <NextLink href='/tech-stack'>
                    <Navbar.Link
                        onClick={() => setActive('tech-stack')}
                        isActive={active === 'tech-stack'}
                        css={{
                            minWidth: '100%',
                            '&:hover': {
                                color: '$pink600',
                                fontWeight: 'bold',
                            },
                        }}
                    >
                        <FormattedMessage
                            id='navbar.techStack'
                            defaultMessage='Tech Stack'
                        />
                    </Navbar.Link>
                </NextLink>
                <NextLink href='/projects'>
                    <Navbar.Link
                        onClick={() => setActive('projects')}
                        isActive={active === 'projects'}
                        css={hoverStyle}
                    >
                        <FormattedMessage
                            id='navbar.projects'
                            defaultMessage='Projects'
                        />
                    </Navbar.Link>
                </NextLink>
                <NextLink href='/contact'>
                    <Navbar.Link
                        onClick={() => setActive('contact')}
                        isActive={active === 'contact'}
                        css={hoverStyle}
                    >
                        <FormattedMessage
                            id='navbar.contact'
                            defaultMessage='Contact'
                        />
                    </Navbar.Link>
                </NextLink>
                <a href={cvLang} target='_blank' rel='noopener noreferrer'>
                    <Button color='gradient' auto ghost shadow animated>
                        <FormattedMessage
                            id='navbar.cv'
                            defaultMessage='Download CV'
                        />
                    </Button>
                </a>
            </Navbar.Content>

            {/* UTILITY ICONS */}
            <UtilityIcons />
            <UtilityIconsCompacted />

            {/* LOGO in MD Resolution */}
            <Navbar.Content showIn='md'>
                <Navbar.Brand>
                    <NextLink href='/'>
                        <a>
                            <Image
                                css={{
                                    '@xsMax': {
                                        height: '65px',
                                        width: '65px',
                                        marginTop: '5px',
                                    },
                                }}
                                className={styles.logo}
                                onClick={() => setActive('/')}
                                src={logo.src}
                                height={75}
                                width={75}
                                alt='Luem Logo'
                            />
                        </a>
                    </NextLink>
                </Navbar.Brand>
            </Navbar.Content>
        </Navbar>
    )
}
