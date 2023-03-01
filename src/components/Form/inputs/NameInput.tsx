import React from 'react'
import { Input } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

export function NameInput({ helperName, props }) {
    return (
        <Input
            {...props}
            name='user_name'
            shadow={false}
            status={helperName.color}
            color={helperName.color}
            helperColor={helperName.color}
            helperText={helperName.text}
            size='lg'
            type='text'
            labelPlaceholder={
                <FormattedMessage
                    id='form.namePlaceholder'
                    defaultMessage='Name'
                />
            }
            bordered
            required
        />
    )
}
