import { Modal } from "../../organisms";

const AuthRequiredModal = ({
    authRequiredModalOpen,
    setAuthRequiredModalOpen,
    triggerLogin
}) => {

    const closeModal = () => {
        setAuthRequiredModalOpen(false);
    };

    const confirmModal = () => {
        setAuthRequiredModalOpen(false);
        triggerLogin();
    };

    return (
        <Modal
            isOpen={authRequiredModalOpen}
            onActionClick={confirmModal}
            onClose={closeModal}
            title="Auth required"
        >
            <p>Do you want to re-authenticate?</p>
        </Modal>
    );
}

export default AuthRequiredModal;
