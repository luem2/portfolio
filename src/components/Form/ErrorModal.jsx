import React from 'react';
import { Modal } from '@nextui-org/react';

export function ErrorModal({ error }) {
  const [visible, setVisible] = error;

  return (
    <>
      <Modal
        animated
        closeButton={true}
        blur
        open={visible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>There are Errors in the form ❌</Modal.Header>
        <Modal.Body
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Please fix the errors...
        </Modal.Body>
      </Modal>
    </>
  );
}
