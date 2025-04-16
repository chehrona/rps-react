import React, { createContext, useContext } from 'react';
import { DataContextType } from './types';

export const DataContext = createContext<DataContextType>({
    players: {
        one: {
            id: 1,
            name: '',
            connected: false,
            choice: '',
            wins: 0,
            losses: 0,
        },
        two: {
            id: 2,
            name: '',
            connected: false,
            choice: '',
            wins: 0,
            losses: 0,
        },
    },
    setPlayers: () => {},
    turn: 3,
    setTurn: () => {},
});

export function useGlobalData() {
    return useContext(DataContext);
}
