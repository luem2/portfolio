import { Button } from '@nextui-org/react'
import { Text } from '@nextui-org/react'
import { motion } from 'framer-motion'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
