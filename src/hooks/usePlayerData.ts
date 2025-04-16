import React, { createContext, useContext } from 'react';
import { DataContextType } from './types';

export const DataContext = createContext<DataContextType>({
    players: {
        one: {
            name: '',
            connected: false,
            choice: '',
            wins: 0,
            losses: 0,
        },
        two: { name: '', connected: false, choice: '', wins: 0, losses: 0 },
    },
});

export function useGlobalData() {
    return useContext(DataContext);
}
