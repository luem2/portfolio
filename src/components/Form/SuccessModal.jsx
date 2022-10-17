import React from 'react';
import { Button, Modal, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

export function SuccessModal({ success, activeLink }) {
  const [visible, setVisible] = success;
  const setActive = activeLink[1];
  const router = useRouter();

  const closeHandler = () => {
    setVisible(false);
    router.push('/');
    setActive('/');
  };

  return (
    <>
      <Modal closeButton animated blur open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text b size={18}>
            Thanks for contacting me ✅
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            b
            css={{
              alignSelf: 'center',
            }}
          >
            I will answer you soon 😃
          </Text>
          <Button color='success' auto onClick={() => setVisible(false)}>
            <Text b size={16}>
              Return
            </Text>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
