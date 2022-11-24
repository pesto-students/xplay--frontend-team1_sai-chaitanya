import React from 'react';

import Organisms from '../../organisms';

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
		<Organisms.Modal
			isOpen={authRequiredModalOpen}
			onActionClick={confirmModal}
			onClose={closeModal}
			title="Auth required">
			<p>Do you want to re-authenticate?</p>
		</Organisms.Modal>
	);
};

export default AuthRequiredModal;
