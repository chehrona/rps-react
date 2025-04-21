import { useEffect, useState, createContext, useContext } from 'react';
import { db } from '../utils/firebase';
import { onValue, ref } from 'firebase/database';
import {
    GameEnum,
    PlayerDataType,
    GameProviderProps,
    GameContextType,
} from './types';

export const PlayerOneData = {
    name: 'Player 1',
    wins: 0,
    losses: 0,
    choice: '',
};

export const PlayerTwoData = {
    name: 'Player 2',
    wins: 0,
    losses: 0,
    choice: '',
};

const GameContext = createContext<GameContextType>({
    playerId: 3,
    setPlayerId: () => {},
    playerName: '',
    setPlayerName: () => {},
    playerOneData: PlayerOneData,
    setPlayerOneData: () => {},
    playerTwoData: PlayerTwoData,
    setPlayerTwoData: () => {},
    turn: 3,
    setTurn: () => {},
    // chat: [],
    // setChat: () => {},
    isPlayerOneConnected: false,
    setIsPlayerOneConnected: () => {},
    isPlayerTwoConnected: false,
    setIsPlayerTwoConnected: () => {},
});

export const GameProvider = ({ children }: GameProviderProps) => {
    const [isPlayerOneConnected, setIsPlayerOneConnected] = useState(false);
    const [isPlayerTwoConnected, setIsPlayerTwoConnected] = useState(false);
    const [playerId, setPlayerId] = useState<GameEnum>(3);
    const [playerName, setPlayerName] = useState<string>('');
    const [playerOneData, setPlayerOneData] =
        useState<PlayerDataType>(PlayerOneData);
    const [playerTwoData, setPlayerTwoData] =
        useState<PlayerDataType>(PlayerTwoData);
    const [turn, setTurn] = useState<GameEnum>(3);
    // const [chat, setChat] = useState<ChatMessage[]>([]);

    return (
        <GameContext.Provider
            value={{
                playerId,
                setPlayerId,
                playerName,
                setPlayerName,
                playerOneData,
                setPlayerOneData,
                playerTwoData,
                setPlayerTwoData,
                turn,
                setTurn,
                isPlayerOneConnected,
                setIsPlayerOneConnected,
                isPlayerTwoConnected,
                setIsPlayerTwoConnected,
                // chat,
                // setChat,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGame = (): GameContextType => {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
};
