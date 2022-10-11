import React from 'react';
import { Modal } from '@nextui-org/react';

export function SuccessModal({ success }) {
  const [visible, setVisible] = success;

  const closeHandler = () => {
    setVisible(false);
    globalThis.location.href = '/';
  };

  return (
    <>
      <Modal
        animated
        closeButton={true}
        blur
        open={visible}
        onClose={() => closeHandler()}
      >
        <Modal.Header>Thanks for contacting me ✅</Modal.Header>
        <Modal.Body
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          I will answer you soon 😃
        </Modal.Body>
      </Modal>
    </>
  );
}
