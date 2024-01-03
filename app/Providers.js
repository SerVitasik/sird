"use client";
import {SessionProvider} from 'next-auth/react';
import { Provider } from 'react-redux';
import store from "@/store";

export const AuthProvider = ({children}) => {
    return <SessionProvider>
        <Provider store={store}>
        {children}
        </Provider>
    </SessionProvider>
};