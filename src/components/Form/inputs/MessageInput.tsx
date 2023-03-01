import React from 'react'
import { Textarea } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

export function MessageInput({ helperMessage, props }) {
    return (
        <Textarea
            {...props}
            name='user_message'
            size='lg'
            bordered
            labelPlaceholder={
                <FormattedMessage
                    id='form.messagePlaceholder'
                    defaultMessage='Message'
                />
            }
            shadow={false}
            status={helperMessage.color}
            color={helperMessage.color}
            helperColor={helperMessage.color}
            helperText={helperMessage.text}
            required
        />
    )
}
