import React, { useEffect, useMemo } from 'react';
import { useInput } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

export function EmailInput() {
  const { value, reset, bindings } = useInput('');

  const validateEmail = value => {
    return value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  };

  const helperEmail = useMemo(() => {
    if (!value) {
      return {
        text: 'Enter your email',
        color: 'secondary',
      };
    }

    const isValid = validateEmail(value);
    return {
      text: isValid ? 'Correct email' : 'Enter a valid email',
      color: isValid ? 'success' : 'error',
    };
  }, [value]);

  useEffect(() => {
    window.sessionStorage.setItem('emailInput', JSON.stringify(value));
  }, [value]);

  return (
    <Input
      {...bindings}
      shadow={false}
      onClearClick={reset}
      status={helperEmail.color}
      color={helperEmail.color}
      helperColor={helperEmail.color}
      helperText={helperEmail.text}
      size='lg'
      type='email'
      labelPlaceholder='Email'
      bordered
      required
    />
  );
}
