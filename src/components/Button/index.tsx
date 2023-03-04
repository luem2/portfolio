import { Button, Container } from '@nextui-org/react'
import { Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode
    onPress?: () => void
    styles: { [name: string]: unknown }
    backgroundColor?: string
    formattedMessage: React.ReactNode
}

export function ButtonMotion({
    icon,
    type,
    onPress = null,
    styles,
    backgroundColor = null,
    formattedMessage,
}: ButtonProps) {
    return (
        <motion.div
            whileHover={{
                scale: 1.035,
            }}
            whileTap={{
                scale: 0.94,
            }}
        >
            <Button
                auto
                css={{
                    backgroundColor,
                    zIndex: '$1',
                    ...styles,
                }}
                icon={icon}
                type={type}
                onPress={onPress}
            >
                <Text b color='white' size={16}>
                    {formattedMessage}
                </Text>
            </Button>
        </motion.div>
    )
}

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
                padding: '$5',
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
