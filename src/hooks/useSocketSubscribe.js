import { useContext, useEffect } from 'react';

import Context from '../context';

const useSocketSubscribe = (eventName, eventHandler) => {
    const socket = useContext(Context.SocketContext);

    useEffect(() => {
        socket.onAny((event, ...args) => {
            console.log(`got ${event}`, ...args);
        });
    }, []);

    useEffect(() => {
        console.log('SocketIO: adding listener', eventName);
        socket.on(eventName, eventHandler);

        return () => {
            console.log('SocketIO: removing listener', eventName);
            socket?.off(eventName, eventHandler);
        };
    }, [eventName]);
};

export default useSocketSubscribe;
