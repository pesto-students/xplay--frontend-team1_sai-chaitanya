import { createContext } from 'react';
import socketio from 'socket.io-client';

import { SOCKET_URL } from '../constants';
import { getValueFromStorage } from '../utils';

const tokens = getValueFromStorage('okta-token-storage');

const socket = socketio.connect(SOCKET_URL, {
    query: { token: tokens?.accessToken?.accessToken }
});

const SocketContext = createContext({ socket: null });

export { socket };

export default SocketContext;
