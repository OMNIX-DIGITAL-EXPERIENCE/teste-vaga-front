import React from 'react'
import { createContext, useContext, useState } from 'react';

interface UserDataProps {
    name: string;
    phoneNumber: string;
    offers: {
        id: number;
        name: string;
        value: number;
    }[]
}

type ContextType = {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    userData: UserDataProps,
    setUserData: React.Dispatch<React.SetStateAction<UserDataProps>>
}

const DEFAULT_VALUE = {
    loading: false,
    setLoading: () => { },
    userData: {
        name: '',
        phoneNumber: '(11) 91122-3344',
        offers: [
            { name: 'Oferta 1', value: 5000, id: 1 },
            { name: 'Oferta 2', value: 10000, id: 2 },
            { name: 'Oferta 3', value: 15000, id: 3 },
        ]
    },
    setUserData: () => { }
}

const AppContext = createContext<ContextType>(DEFAULT_VALUE);

export const AppWrapper: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(DEFAULT_VALUE.loading)
    const [userData, setUserData] = useState(DEFAULT_VALUE.userData)
    return (
        <AppContext.Provider value={{
            loading, setLoading,
            userData, setUserData
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}