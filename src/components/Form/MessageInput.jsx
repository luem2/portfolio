import React, { useEffect, useMemo } from 'react';
import { Textarea, useInput } from '@nextui-org/react';

export function MessageInput() {
  const { value, reset, bindings } = useInput('');

  const validateMessage = value => {
    return value.length > 15;
  };

  const helperMessage = useMemo(() => {
    if (!value) {
      return {
        text: 'Enter your message',
        color: 'secondary',
      };
    }

    const isValid = validateMessage(value);
    return {
      text: isValid ? 'Correct message' : 'At least 15 characters',
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
      labelPlaceholder='Message'
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
