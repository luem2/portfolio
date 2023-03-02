import type { Dispatch, SetStateAction } from 'react'

import { Button, Modal, Text } from '@nextui-org/react'
import { FormattedMessage } from 'react-intl'

interface Props {
    error: [boolean, Dispatch<SetStateAction<boolean>>]
}

export function ErrorModal({ error }: Props) {
    const [visible, setVisible] = error

    return (
        <>
            <Modal
                animated
                blur
                closeButton
                open={visible}
                onClose={() => setVisible(true)}
            >
                <Modal.Header>
                    <Text b size={18}>
                        <FormattedMessage
                            defaultMessage='There are Errors in the form ❌'
                            id='modal.errorTitle'
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
                            defaultMessage='Please fix them to continue...'
                            id='modal.errorBody'
                        />
                    </Text>
                    <Button
                        auto
                        color='error'
                        onClick={() => setVisible(false)}
                    >
                        <Text b size={16}>
                            <FormattedMessage
                                defaultMessage='Return'
                                id='modal.button'
                            />
                        </Text>
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}
