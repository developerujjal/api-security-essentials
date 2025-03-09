'use client'
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const NEXTAUTH = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default NEXTAUTH;