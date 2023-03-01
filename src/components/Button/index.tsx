import { Button } from '@nextui-org/react'
import { Text } from '@nextui-org/react'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineClear } from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'

export function ButtonSubmitForm() {
    return (
        <Button
            css={{
                backgroundColor: '$pink700',
                zIndex: '$1',
            }}
            type='submit'
            icon={<FaTelegramPlane size={20} />}
            auto
        >
            <Text weight={'bold'} color='white'>
                <FormattedMessage id='contact.submit' defaultMessage='Submit' />
            </Text>
        </Button>
    )
}

export function ButtonClearForm({ onClick }) {
    return (
        <Button
            css={{
                backgroundColor: '$purple700',
                zIndex: '$1',
            }}
            type='reset'
            onClick={onClick}
            icon={<AiOutlineClear size={20} />}
            auto
        >
            <Text weight={'bold'} color='white'>
                <FormattedMessage id='contact.clear' defaultMessage='Clear' />
            </Text>
        </Button>
    )
}
