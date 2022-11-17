import { Modal as AntModal } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({
    children,
    onActionClick,
    onClose,
    isOpen,
    title
}) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen ?? false);

    const handleCancel = () => {
        onClose();
        setIsModalOpen(false);
    };

    const handleOk = () => {
        onActionClick();
        onClose();
        setIsModalOpen(false);
    };

    return (
        <AntModal
            destroyOnClose
            maskClosable
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            title={title}
        >
            {children}
        </AntModal>
    );
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onActionClick: PropTypes.func,
    onClose: PropTypes.func,
    isOpen: PropTypes.bool,
    title: PropTypes.string
};

Modal.defaultProps = {
    onActionClick: () => { },
    onClose: () => { },
    isOpen: false,
    title: 'Some Title'
};

export default Modal;
