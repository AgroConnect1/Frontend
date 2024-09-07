import { createContext, useState } from 'react';

export const GlobalStates = createContext();

export function GlobalStateProvider({ children }) {
    
    const [loginState, setLoginState] = useState(false);
    
    return (
        <GlobalStates.Provider value={{ loginState, setLoginState }}>
            {children}
        </GlobalStates.Provider>
    );
};


