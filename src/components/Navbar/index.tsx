import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { Image } from '@nextui-org/react'
import { Button, Navbar } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router'

import { logo } from '../../assets'
import { HamburgerButton } from '../HamburgerButton'

import styles from '/styles/Navbar.module.css'

import { useStore } from '../../store/useStore'
import { navbarLinks } from '../../constants'
import { NavbarLinkItem } from '../Button'

import { UtilityIcons, UtilityIconsCompacted } from './UtilityIcons'

export default function NavigateBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { cvLang, activeLink, setActiveLink, openMenu } = useStore()
    const router = useRouter()

    useEffect(() => {
        if (router.asPath === '/') {
            setActiveLink('/')
        } else {
            setActiveLink(router.asPath.slice(1))
        }
    }, [setActiveLink, router.asPath])

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
            <Navbar.Content hideIn='md'>
                {navbarLinks.map((navItem) => {
                    return (
                        <NavbarLinkItem
                            key={navItem.id}
                            formattedMessage={navItem.formattedMessage}
                            icon={navItem.icon}
                            isActive={activeLink === navItem.path}
                            onPress={() => {
                                if (navItem.path === '/') {
                                    router.push(navItem.path)
                                    setActiveLink(navItem.path)

                                    return
                                }
                                router.push(`/${navItem.path}`)
                                setActiveLink(navItem.path)
                            }}
                        />
                    )
                })}
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
