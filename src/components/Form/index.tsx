import emailjs from '@emailjs/browser'
import { Row, Spacer } from '@nextui-org/react'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineClear } from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'

import { ButtonMotion } from '../Button'
import useHelperName from '../../hooks/useHelper'
import useHelperEmail from '../../hooks/useHelper'
import useHelperMessage from '../../hooks/useHelper'

import { EmailInput } from './inputs/EmailInput'
import { MessageInput } from './inputs/MessageInput'
import { NameInput } from './inputs/NameInput'
import { ErrorModal } from './modals/ErrorModal'
import { SuccessModal } from './modals/SuccessModal'
import { validateEmail } from './helpers'

interface Inputs {
    user_name: string
    user_email: string
    user_message: string
}

export function Form() {
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const { register, handleSubmit, watch, reset } = useForm<Inputs>()

    const { helperName } = useHelperName(watch('user_name'))
    const { helperEmail } = useHelperEmail(watch('user_email'))
    const { helperMessage } = useHelperMessage(watch('user_message'))

    const onSubmit: SubmitHandler<Inputs> = ({
        user_name,
        user_email,
        user_message,
    }) => {
        const form = { user_name, user_email, user_message }

        const emailValidate = validateEmail(user_email)

        if (
            user_name.length <= 5 ||
            emailValidate === null ||
            user_message.length <= 15
        ) {
            return setError(true)
        }

        emailjs
            .send(
                'service_1lj00om',
                'template_ww76j0t',
                form,
                '9asy4anV7AwZnUZZE'
            )
            .then((result) =>
                console.info('Form sent successfully', {
                    status: result.status,
                    form,
                })
            )
            .catch((err) => console.error(err))
        setSuccess(true)
    }

    return (
        <>
            <Spacer y={1.5} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <NameInput
                    helperName={helperName}
                    props={register('user_name')}
                />
                <Spacer y={3.0} />
                <EmailInput
                    helperEmail={helperEmail}
                    props={register('user_email')}
                />
                <Spacer y={3.0} />
                <MessageInput
                    helperMessage={helperMessage}
                    props={register('user_message')}
                />
                <Spacer y={2} />

                <Row>
                    <ButtonMotion
                        backgroundColor={'$pink700'}
                        formattedMessage={
                            <FormattedMessage
                                defaultMessage='Submit'
                                id='contact.submit'
                            />
                        }
                        icon={<FaTelegramPlane size={20} />}
                        styles={null}
                        type='submit'
                    />
                    <Spacer x={0.6} />
                    <ButtonMotion
                        backgroundColor={'$purple700'}
                        formattedMessage={
                            <FormattedMessage
                                defaultMessage='Clear'
                                id='contact.clear'
                            />
                        }
                        icon={<AiOutlineClear size={20} />}
                        styles={null}
                        type='reset'
                        onPress={reset}
                    />
                </Row>
            </form>
            <SuccessModal success={[success, setSuccess]} />
            <ErrorModal error={[error, setError]} />
        </>
    )
}
