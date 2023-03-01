import type { SimpleColors } from '@nextui-org/react'
import { useMemo } from 'react'
import { FormattedMessage } from 'react-intl'

import {
    validateEmail,
    validateMessage,
    validateName,
} from '../components/Form/helpers'

const useHelper = (value: string) => {
    const helperName = useMemo((): {
        text: string | React.ReactNode
        color: SimpleColors
    } => {
        if (!value) {
            return {
                text: (
                    <FormattedMessage
                        id='form.nameInputDefault'
                        defaultMessage='Enter your full name'
                    />
                ),
                color: 'secondary',
            }
        }

        const isValid = validateName(value)
        return {
            text: isValid ? (
                <FormattedMessage
                    id='form.nameInputValid'
                    defaultMessage='Correct name'
                />
            ) : (
                <FormattedMessage
                    id='form.nameInputInvalid'
                    defaultMessage='At least 5 characters'
                />
            ),
            color: isValid ? 'success' : 'error',
        }
    }, [value])

    const helperEmail = useMemo((): {
        text: string | React.ReactNode
        color: SimpleColors
    } => {
        if (!value) {
            return {
                text: (
                    <FormattedMessage
                        id='form.emailInputDefault'
                        defaultMessage='Enter your email'
                    />
                ),
                color: 'secondary',
            }
        }

        const isValid = validateEmail(value)
        return {
            text: isValid ? (
                <FormattedMessage
                    id='form.emailInputValid'
                    defaultMessage='Correct email'
                />
            ) : (
                <FormattedMessage
                    id='form.emailInputInvalid'
                    defaultMessage='Enter a valid email'
                />
            ),
            color: isValid ? 'success' : 'error',
        }
    }, [value])

    const helperMessage = useMemo((): {
        text: string | React.ReactNode
        color: SimpleColors
    } => {
        if (!value) {
            return {
                text: (
                    <FormattedMessage
                        id='form.messageInputDefault'
                        defaultMessage='Enter your message'
                    />
                ),
                color: 'secondary',
            }
        }

        const isValid = validateMessage(value)
        return {
            text: isValid ? (
                <FormattedMessage
                    id='form.messageInputValid'
                    defaultMessage='Correct message'
                />
            ) : (
                <FormattedMessage
                    id='form.messageInputInvalid'
                    defaultMessage='At least 15 characters'
                />
            ),
            color: isValid ? 'success' : 'error',
        }
    }, [value])

    return {
        helperName,
        helperEmail,
        helperMessage,
    }
}

export default useHelper
