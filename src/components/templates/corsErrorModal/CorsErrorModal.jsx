import { Modal } from "../../organisms";

const CorsErrorModal = ({ corsErrorModalOpen, setCorsErrorModalOpen }) => {
    const issuer = process.env.REACT_APP_OKTA_ISSUER;
    const baseUrl = issuer.split('/oauth2')[0];
    const hostParts = new URL(baseUrl).host.split('.');
    hostParts[0] += '-admin';
    const adminHost = hostParts.join('.');
    const corsAdminUrl = `https://${adminHost}/admin/access/api/trusted_origins`;

    return (
        <Modal
            onClose={() => setCorsErrorModalOpen(false)}
            isOpen={corsErrorModalOpen}
            title="Network Error"
        >
            <p>Seems like logout API call resulted with CORS error.</p>
            <p>
                You may need to add your origin
                {' '}
                {window.location.origin}
                {' '}
                to list of trusted origins in your
                {' '}
                <a href={corsAdminUrl} target="_blank" rel="noreferrer">Okta Administrator Dashboard</a>
            </p>
        </Modal>
    );
}

export default CorsErrorModal;
