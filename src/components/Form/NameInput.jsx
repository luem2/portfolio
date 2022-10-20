import React, { useEffect, useMemo } from 'react';
import { useInput } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { FormattedMessage } from 'react-intl';

export function NameInput() {
  const { value, reset, bindings } = useInput('');
  const validateName = value => {
    return value.length > 5;
  };

  const helperName = useMemo(() => {
    if (!value) {
      return {
        text: (
          <FormattedMessage
            id='form.nameInputDefault'
            defaultMessage='Enter your full name'
          />
        ),
        color: 'secondary',
      };
    }

    const isValid = validateName(value);
    return {
      text: isValid ? (
        <FormattedMessage
          id='form.nameInputValid'
          defaultMessage='Correct name'
        />
      ) : (
        <FormattedMessage
          id='form.nameInputInvalid'
          defaultMessage='At least 5 characters'
        />
      ),
      color: isValid ? 'success' : 'error',
    };
  }, [value]);

  useEffect(() => {
    window.sessionStorage.setItem('nameInput', value);
  }, [value]);

  return (
    <Input
      {...bindings}
      name='user_name'
      shadow={false}
      onClearClick={reset}
      status={helperName.color}
      color={helperName.color}
      helperColor={helperName.color}
      helperText={helperName.text}
      size='lg'
      type='text'
      labelPlaceholder={
        <FormattedMessage id='form.namePlaceholder' defaultMessage='Name' />
      }
      bordered
      required
    />
  );
}
