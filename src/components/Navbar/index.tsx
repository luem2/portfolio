import React, { useEffect, useState } from 'react'
import { Image } from '@nextui-org/react'
import NextLink from 'next/link'
import { Button, Navbar } from '@nextui-org/react'
import { logo } from '../../assets'
import { UtilityIcons, UtilityIconsCompacted } from './UtilityIcons'
import { FormattedMessage } from 'react-intl'
import { HamburgerButton } from '../HamburgerButton'
import styles from '/styles/Navbar.module.css'
import { useStore } from '../../store/useStore'

export default function NavigateBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { cvLang, activeLink, setActiveLink, openMenu } = useStore()

    const hoverStyle = {
        minWidth: '100%',
        '&:hover': {
            color: '$pink600',
            fontWeight: 'bold',
        },
    }

    useEffect(() => {
        if (window.location.pathname === '/') {
            setActiveLink('/')
        } else {
            setActiveLink(window.location.pathname.slice(1))
        }
    }, [setActiveLink])

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
            shouldHideOnScroll={openMenu ? false : true}
        >
            {/* HAMBURGER BUTTON*/}
            <Navbar.Content showIn='md'>
                <HamburgerButton />
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
                                onClick={() => setActiveLink('/')}
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
                        onClick={() => setActiveLink('/')}
                        isActive={activeLink === '/'}
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
                        onClick={() => setActiveLink('about')}
                        isActive={activeLink === 'about'}
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
                        onClick={() => setActiveLink('tech-stack')}
                        isActive={activeLink === 'tech-stack'}
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
                        onClick={() => setActiveLink('projects')}
                        isActive={activeLink === 'projects'}
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
                        onClick={() => setActiveLink('contact')}
                        isActive={activeLink === 'contact'}
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
                                onClick={() => setActiveLink('/')}
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
