import type { IHelper, InputForm } from '../../../../types/types'

import { Input } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

interface Props extends InputForm {
    helperName: IHelper
}

export function NameInput({ helperName, props }: Props) {
    return (
        <Input
            {...props}
            bordered
            required
            color={helperName.color}
            helperColor={helperName.color}
            helperText={helperName.text}
            labelPlaceholder={
                <FormattedMessage
                    defaultMessage='Name'
                    id='form.namePlaceholder'
                />
            }
            name='user_name'
            shadow={false}
            size='lg'
            status={helperName.color}
            type='text'
        />
    )
}
