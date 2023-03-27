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
                        defaultMessage='Enter your full name'
                        id='form.nameInputDefault'
                    />
                ),
                color: 'secondary',
            }
        }

        const isValid = validateName(value)

        return {
            text: isValid ? (
                <FormattedMessage
                    defaultMessage='Correct name'
                    id='form.nameInputValid'
                />
            ) : (
                <FormattedMessage
                    defaultMessage='At least 5 characters'
                    id='form.nameInputInvalid'
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
                        defaultMessage='Enter your email'
                        id='form.emailInputDefault'
                    />
                ),
                color: 'secondary',
            }
        }

        const isValid = validateEmail(value)

        return {
            text: isValid ? (
                <FormattedMessage
                    defaultMessage='Correct email'
                    id='form.emailInputValid'
                />
            ) : (
                <FormattedMessage
                    defaultMessage='Enter a valid email'
                    id='form.emailInputInvalid'
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
                        defaultMessage='Enter your message'
                        id='form.messageInputDefault'
                    />
                ),
                color: 'secondary',
            }
        }

        const isValid = validateMessage(value)

        return {
            text: isValid ? (
                <FormattedMessage
                    defaultMessage='Correct message'
                    id='form.messageInputValid'
                />
            ) : (
                <FormattedMessage
                    defaultMessage='At least 15 characters'
                    id='form.messageInputInvalid'
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
