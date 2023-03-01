import React from 'react'
import { Input } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

export function EmailInput({ helperEmail, props }) {
    return (
        <Input
            {...props}
            name='user_email'
            shadow={false}
            status={helperEmail.color}
            color={helperEmail.color}
            helperColor={helperEmail.color}
            helperText={helperEmail.text}
            size='lg'
            type='email'
            labelPlaceholder={
                <FormattedMessage
                    id='form.emailPlaceholder'
                    defaultMessage='Email'
                />
            }
            bordered
            required
        />
    )
}
