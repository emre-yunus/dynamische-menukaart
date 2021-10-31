import React, {createContext, useContext, useMemo, useState} from 'react';

const MessageContext = createContext();

export function MessageProvider(props) {
    const [message, setMessage] = useState("");
    console.log({message});

    const api = useMemo(() => ({
        message, setMessage
    }), [
        message, setMessage
    ]);

    return <MessageContext.Provider value={api}>
        {props.children}
    </MessageContext.Provider>
}

export const useMessageContext = () => useContext(MessageContext);