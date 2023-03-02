import type { Dispatch, SetStateAction } from 'react'

import { Button, Modal, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

import { useStore } from '../../../store/useStore'

interface Props {
    success: [boolean, Dispatch<SetStateAction<boolean>>]
}

export function SuccessModal({ success }: Props) {
    const [visible, setVisible] = success

    const { setActiveLink } = useStore()
    const router = useRouter()

    const closeHandler = () => {
        setVisible(false)
        router.push('/')
        setActiveLink('/')
    }

    return (
        <>
            <Modal
                animated
                blur
                closeButton
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b size={18}>
                        <FormattedMessage
                            defaultMessage='Thanks for contacting me ✅'
                            id='modal.successTitle'
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
                            defaultMessage='I will answer you soon 😃'
                            id='modal.successBody'
                        />
                    </Text>
                    <Button
                        auto
                        color='success'
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
