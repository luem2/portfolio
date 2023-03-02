import { Row, Spacer } from '@nextui-org/react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { EmailInput } from './inputs/EmailInput'
import { MessageInput } from './inputs/MessageInput'
import { NameInput } from './inputs/NameInput'
import { ErrorModal } from './modals/ErrorModal'
import { SuccessModal } from './modals/SuccessModal'
import { ButtonMotion } from '../Button'
import { validateEmail } from './helpers'
import useHelperName from '../../hooks/useHelper'
import useHelperEmail from '../../hooks/useHelper'
import useHelperMessage from '../../hooks/useHelper'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineClear } from 'react-icons/ai'
import { FormattedMessage } from 'react-intl'
import { motion } from 'framer-motion'

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
                console.log('Form sent successfully', {
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
                        styles={null}
                        backgroundColor={'$pink700'}
                        icon={<FaTelegramPlane size={20} />}
                        type='submit'
                        formattedMessage={
                            <FormattedMessage
                                id='contact.submit'
                                defaultMessage='Submit'
                            />
                        }
                    />
                    <Spacer x={0.6} />
                    <ButtonMotion
                        styles={null}
                        backgroundColor={'$purple700'}
                        icon={<AiOutlineClear size={20} />}
                        type='reset'
                        onPress={reset}
                        formattedMessage={
                            <FormattedMessage
                                id='contact.clear'
                                defaultMessage='Clear'
                            />
                        }
                    />
                </Row>
            </form>
            <SuccessModal success={[success, setSuccess]} />
            <ErrorModal error={[error, setError]} />
        </>
    )
}
