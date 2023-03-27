import { Button, Container } from '@nextui-org/react'
import { useTheme } from 'next-themes'

import { ButtonProps } from '../Button'

interface INavbarLink extends Omit<ButtonProps, 'backgroundColor' | 'styles'> {
    isActive: boolean
}

export function NavbarLinkItem({
    formattedMessage,
    icon,
    onPress,
    isActive = false,
}: INavbarLink) {
    const { theme } = useTheme()

    return (
        <Container
            css={{
                padding: '$2',
                width: 'fit-content',
            }}
        >
            <Button
                auto
                css={{
                    color: isActive
                        ? '$red700'
                        : theme === 'dark'
                        ? 'white'
                        : 'black',
                    padding: '$0',
                    fontSize: '$md',
                    background: 'transparent',
                    width: 'fit-content',
                    '&:hover': {
                        color: '$red700',
                    },
                }}
                icon={icon}
                onPress={onPress}
            >
                {formattedMessage}
            </Button>
        </Container>
    )
}
