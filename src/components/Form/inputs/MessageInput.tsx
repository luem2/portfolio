import type { IHelper, InputForm } from '../../../../types/types'

import { Textarea } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

interface Props extends InputForm {
    helperMessage: IHelper
}

export function MessageInput({ helperMessage, props }: Props) {
    return (
        <Textarea
            {...props}
            bordered
            required
            color={helperMessage.color}
            helperColor={helperMessage.color}
            helperText={helperMessage.text}
            labelPlaceholder={
                <FormattedMessage
                    defaultMessage='Message'
                    id='form.messagePlaceholder'
                />
            }
            name='user_message'
            shadow={false}
            size='lg'
            status={helperMessage.color}
        />
    )
}
