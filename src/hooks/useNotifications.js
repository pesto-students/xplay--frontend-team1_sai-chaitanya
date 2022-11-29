import { message } from 'antd';

const useNotifications = () => {
    const notify = (description, key = 'defaultKey', type = 'success') => {
        message?.[type]({
            content: description,
            key
        });
    };

    return {
        notify
    }
}

export default useNotifications;
