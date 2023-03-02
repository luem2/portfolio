import { Button, Navbar, Switch } from '@nextui-org/react'
import { Popover } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react'

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
} from '../../assets'
import { Box } from '../Box'

import { LanguageSwitch } from './LanguageSwitch'

export function UtilityIcons() {
    const { setTheme } = useNextTheme()
    const { isDark } = useTheme()

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
                        href='https://www.linkedin.com/in/lucianopinol'
                        rel='noreferrer'
                        style={{
                            color: isDark ? 'white' : '#1F1F1F',
                        }}
                        target='_blank'
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
                        href='https://www.github.com/luem2'
                        rel='noreferrer'
                        style={{
                            color: isDark ? 'white' : '#1F1F1F',
                        }}
                        target='_blank'
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
                        href='https://www.twitter.com/luem08'
                        rel='noreferrer'
                        style={{
                            color: isDark ? 'white' : '#1F1F1F',
                        }}
                        target='_blank'
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
                        href='https://t.me/luem02'
                        rel='noreferrer'
                        style={{
                            color: isDark ? 'white' : '#1F1F1F ',
                        }}
                        target='_blank'
                    >
                        <FaTelegramPlane size={25} />
                    </a>
                </Navbar.Item>
                <Navbar.Item>
                    <LanguageSwitch />
                </Navbar.Item>
                <Navbar.Item>
                    <Switch
                        checked={isDark}
                        color='secondary'
                        iconOff={<BsFillMoonFill />}
                        iconOn={<BsFillSunFill />}
                        size='md'
                        onChange={(e) =>
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }
                    />
                </Navbar.Item>
            </Navbar.Content>
        </>
    )
}

export function UtilityIconsCompacted() {
    const { setTheme } = useNextTheme()
    const { isDark } = useTheme()

    return (
        <Navbar.Content showIn='xs'>
            <Popover>
                <Popover.Trigger>
                    <Button animated auto ghost shadow color='gradient'>
                        <IoShareSocialSharp size={20} />
                        <MdGTranslate
                            size={20}
                            style={{
                                marginLeft: '10px',
                            }}
                        />
                        <VscColorMode
                            size={20}
                            style={{
                                marginLeft: '10px',
                            }}
                        />
                    </Button>
                </Popover.Trigger>

                <Popover.Content
                    css={{
                        border: isDark
                            ? '1px solid #0072f5'
                            : '1px solid #9750b0',
                        padding: '$5',
                        '@xsMin': {
                            display: 'none',
                        },
                    }}
                >
                    <a
                        href='https://www.linkedin.com/in/lucianopinol'
                        rel='noreferrer'
                        style={{
                            paddingRight: '10px',
                            color: isDark ? 'white' : '#1F1F1F',
                        }}
                        target='_blank'
                    >
                        <AiFillLinkedin size={25} />
                    </a>
                    <a
                        href='https://www.github.com/luem2'
                        rel='noreferrer'
                        style={{
                            paddingRight: '10px',
                            color: isDark ? 'white' : '#1F1F1F',
                        }}
                        target='_blank'
                    >
                        <AiFillGithub size={25} />
                    </a>
                    <a
                        href='https://www.twitter.com/luem08'
                        rel='noreferrer'
                        style={{
                            paddingRight: '10px',
                            color: isDark ? 'white' : '#1F1F1F',
                        }}
                        target='_blank'
                    >
                        <AiOutlineTwitter size={25} />
                    </a>
                    <a
                        href='https://t.me/luem02'
                        rel='noreferrer'
                        style={{
                            paddingRight: '10px',
                            color: isDark ? 'white' : '#1F1F1F ',
                        }}
                        target='_blank'
                    >
                        <FaTelegramPlane size={25} />
                    </a>
                    <Box
                        css={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '$5',
                            gap: '$5',
                        }}
                    >
                        <div
                            style={{
                                marginTop: '0.2rem',
                            }}
                        >
                            <LanguageSwitch />
                        </div>
                        <Switch
                            checked={isDark}
                            color='secondary'
                            iconOff={<BsFillMoonFill />}
                            iconOn={<BsFillSunFill />}
                            size='md'
                            onChange={(e) =>
                                setTheme(e.target.checked ? 'dark' : 'light')
                            }
                        />
                    </Box>
                </Popover.Content>
            </Popover>
        </Navbar.Content>
    )
}
