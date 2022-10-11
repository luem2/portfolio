import React, { useState } from 'react';
import { Button, Input, Spacer, Text, Textarea } from '@nextui-org/react';
import { Modal } from '@nextui-org/react';
import { EmailInput } from './EmailInput';
import { NameInput } from './NameInput';
import { MessageInput } from './MessageInput';
import { FaTelegramPlane } from '/src/assets';

export function Form() {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
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
        }}
        onClick={handler}
        type='submit'
        icon={<FaTelegramPlane size={20} />}
        auto
      >
        <Text weight={'bold'} color='white'>
          Submit
        </Text>
        <Modal open={visible} onClose={closeHandler}>
          <Modal.Header>Thanks for contact me</Modal.Header>
          <Modal.Body>Very soon i will responded you UWU</Modal.Body>
        </Modal>
      </Button>
    </>
  );
}
