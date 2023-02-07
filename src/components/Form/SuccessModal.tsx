import React from 'react';
import { Button, Modal, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';

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
            <FormattedMessage
              id='modal.successTitle'
              defaultMessage='Thanks for contacting me ✅'
            />
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            b
            css={{
              alignSelf: 'center',
            }}
          >
            <FormattedMessage
              id='modal.successBody'
              defaultMessage='I will answer you soon 😃'
            />
          </Text>
          <Button color='success' auto onClick={() => setVisible(false)}>
            <Text b size={16}>
              <FormattedMessage id='modal.button' defaultMessage='Return' />
            </Text>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
