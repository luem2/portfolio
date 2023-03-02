import { useEffect, useState } from 'react'
import { Image } from '@nextui-org/react'
import NextLink from 'next/link'
import { Button, Navbar } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

import { logo } from '../../assets'
import { HamburgerButton } from '../HamburgerButton'

import styles from '/styles/Navbar.module.css'

import { useStore } from '../../store/useStore'

import { UtilityIcons, UtilityIconsCompacted } from './UtilityIcons'

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
            shouldHideOnScroll={openMenu ? false : true}
            variant='sticky'
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
                        showIn='md'
                        onChange={() => !isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <NextLink href='/'>
                        <a>
                            <Image
                                alt='Luem Logo'
                                className={styles.logo}
                                height={75}
                                src={logo.src}
                                width={75}
                                onClick={() => setActiveLink('/')}
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
                        css={hoverStyle}
                        isActive={activeLink === '/'}
                        onClick={() => setActiveLink('/')}
                    >
                        <FormattedMessage
                            defaultMessage='Home'
                            id='navbar.home'
                        />
                    </Navbar.Link>
                </NextLink>
                <NextLink href='/about'>
                    <Navbar.Link
                        css={hoverStyle}
                        isActive={activeLink === 'about'}
                        onClick={() => setActiveLink('about')}
                    >
                        <FormattedMessage
                            defaultMessage='About'
                            id='navbar.about'
                        />
                    </Navbar.Link>
                </NextLink>
                <NextLink href='/tech-stack'>
                    <Navbar.Link
                        css={{
                            minWidth: '100%',
                            '&:hover': {
                                color: '$pink600',
                                fontWeight: 'bold',
                            },
                        }}
                        isActive={activeLink === 'tech-stack'}
                        onClick={() => setActiveLink('tech-stack')}
                    >
                        <FormattedMessage
                            defaultMessage='Tech Stack'
                            id='navbar.techStack'
                        />
                    </Navbar.Link>
                </NextLink>
                <NextLink href='/projects'>
                    <Navbar.Link
                        css={hoverStyle}
                        isActive={activeLink === 'projects'}
                        onClick={() => setActiveLink('projects')}
                    >
                        <FormattedMessage
                            defaultMessage='Projects'
                            id='navbar.projects'
                        />
                    </Navbar.Link>
                </NextLink>
                <NextLink href='/contact'>
                    <Navbar.Link
                        css={hoverStyle}
                        isActive={activeLink === 'contact'}
                        onClick={() => setActiveLink('contact')}
                    >
                        <FormattedMessage
                            defaultMessage='Contact'
                            id='navbar.contact'
                        />
                    </Navbar.Link>
                </NextLink>
                <a href={cvLang} rel='noopener noreferrer' target='_blank'>
                    <Button animated auto ghost shadow color='gradient'>
                        <FormattedMessage
                            defaultMessage='Download CV'
                            id='navbar.cv'
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
                                alt='Luem Logo'
                                className={styles.logo}
                                css={{
                                    '@xsMax': {
                                        height: '65px',
                                        width: '65px',
                                        marginTop: '5px',
                                    },
                                }}
                                height={75}
                                src={logo.src}
                                width={75}
                                onClick={() => setActiveLink('/')}
                            />
                        </a>
                    </NextLink>
                </Navbar.Brand>
            </Navbar.Content>
        </Navbar>
    )
}
