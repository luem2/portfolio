import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Spacer, Text } from '@nextui-org/react';
import { EmailInput } from './EmailInput';
import { NameInput } from './NameInput';
import { MessageInput } from './MessageInput';
import { FaTelegramPlane } from '/src/assets';
import { ErrorModal } from './ErrorModal';
import { SuccessModal } from './SuccessModal';

export function Form() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const name = globalThis.sessionStorage.getItem('nameInput');
    const email = globalThis.sessionStorage.getItem('emailInput');
    const message = globalThis.sessionStorage.getItem('messageInput');
    const form = { user_name: name, user_email: email, user_message: message };

    const emailValidate = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    if (name.length <= 5 || emailValidate === null || message.length <= 15) {
      return setError(true);
    }

    emailjs
      .send('service_1lj00om', 'template_ww76j0t', form, '9asy4anV7AwZnUZZE')
      .then(result =>
        console.log('Form sent successfully', { status: result.status, form })
      )
      .catch(err => console.error(err));
    setSuccess(true);
  };

  return (
    <>
      <SuccessModal success={[success, setSuccess]} />
      <ErrorModal error={[error, setError]} />
      <Spacer y={1.5} />
      <NameInput />
      <Spacer y={3.0} />
      <EmailInput />
      <Spacer y={3.0} />
      <MessageInput />
      <Spacer y={2} />

      <Button
        css={{
          backgroundColor: '$pink700',
          zIndex: '$1',
        }}
        onClick={handleSubmit}
        type='submit'
        icon={<FaTelegramPlane size={20} />}
        auto
      >
        <Text weight={'bold'} color='white'>
          Submit
        </Text>
      </Button>
    </>
  );
}
