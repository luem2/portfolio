import React, { useEffect, useMemo } from 'react';
import { Textarea, useInput } from '@nextui-org/react';
import { FormattedMessage } from 'react-intl';

export function MessageInput() {
  const { value, reset, bindings } = useInput('');

  const validateMessage = value => {
    return value.length > 15;
  };

  const helperMessage = useMemo(() => {
    if (!value) {
      return {
        text: (
          <FormattedMessage
            id='form.messageInputDefault'
            defaultMessage='Enter your message'
          />
        ),
        color: 'secondary',
      };
    }

    const isValid = validateMessage(value);
    return {
      text: isValid ? (
        <FormattedMessage
          id='form.messageInputValid'
          defaultMessage='Correct message'
        />
      ) : (
        <FormattedMessage
          id='form.messageInputInvalid'
          defaultMessage='At least 15 characters'
        />
      ),
      color: isValid ? 'success' : 'error',
    };
  }, [value]);

  useEffect(() => {
    window.sessionStorage.setItem('messageInput', value);
  }, [value]);

  return (
    <Textarea
      {...bindings}
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
      onClearClick={reset}
      status={helperMessage.color}
      color={helperMessage.color}
      helperColor={helperMessage.color}
      helperText={helperMessage.text}
      required
    />
  );
}
