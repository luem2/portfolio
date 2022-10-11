import React, { useEffect, useMemo } from 'react';
import { useInput } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

export function NameInput() {
  const { value, reset, bindings } = useInput('');
  const validateName = value => {
    return value.length > 5;
  };

  const helperName = useMemo(() => {
    if (!value) {
      return {
        text: 'Enter your Full Name',
        color: 'secondary',
      };
    }

    const isValid = validateName(value);
    return {
      text: isValid ? 'Correct name' : 'At least 5 characters',
      color: isValid ? 'success' : 'error',
    };
  }, [value]);

  useEffect(() => {
    window.sessionStorage.setItem('nameInput', JSON.stringify(value));
  }, [value]);

  return (
    <Input
      {...bindings}
      shadow={false}
      onClearClick={reset}
      status={helperName.color}
      color={helperName.color}
      helperColor={helperName.color}
      helperText={helperName.text}
      size='lg'
      type='text'
      labelPlaceholder='Name'
      bordered
      required
    />
  );
}
