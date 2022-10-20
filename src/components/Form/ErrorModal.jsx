import React from 'react';
import { Button, Modal, Text } from '@nextui-org/react';
import { FormattedMessage } from 'react-intl';

export function ErrorModal({ error }) {
  const [visible, setVisible] = error;

  return (
    <>
      <Modal closeButton animated blur open={visible} onClose={setVisible}>
        <Modal.Header>
          <Text b size={18}>
            <FormattedMessage
              id='modal.errorTitle'
              defaultMessage='There are Errors in the form ❌'
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
              id='modal.errorBody'
              defaultMessage='Please fix them to continue...'
            />
          </Text>
          <Button color='error' auto onClick={() => setVisible(false)}>
            <Text b size={16}>
              <FormattedMessage id='modal.button' defaultMessage='Return' />
            </Text>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
