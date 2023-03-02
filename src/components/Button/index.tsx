import { Button } from '@nextui-org/react'
import { Text } from '@nextui-org/react'
import { motion } from 'framer-motion'

export function ButtonMotion({
    icon,
    type,
    onPress = null,
    styles,
    backgroundColor = null,
    formattedMessage,
}) {
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
                css={{
                    backgroundColor,
                    zIndex: '$1',
                    ...styles,
                }}
                type={type}
                onPress={onPress}
                icon={icon}
                auto
            >
                <Text b size={16} color='white'>
                    {formattedMessage}
                </Text>
            </Button>
        </motion.div>
    )
}
