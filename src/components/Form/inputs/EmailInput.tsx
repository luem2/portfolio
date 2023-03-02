import type { IHelper, InputForm } from '../../../../types/types'

import { FormattedMessage } from 'react-intl'
import { Input } from '@nextui-org/react'

interface Props extends InputForm {
    helperEmail: IHelper
}

export function EmailInput({ helperEmail, props }: Props) {
    return (
        <Input
            {...props}
            bordered
            required
            color={helperEmail.color}
            helperColor={helperEmail.color}
            helperText={helperEmail.text}
            labelPlaceholder={
                <FormattedMessage
                    defaultMessage='Email'
                    id='form.emailPlaceholder'
                />
            }
            name='user_email'
            shadow={false}
            size='lg'
            status={helperEmail.color}
            type='email'
        />
    )
}
