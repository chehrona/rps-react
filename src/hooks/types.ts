import { ReactNode } from 'react';

export type GameEnum = 1 | 2 | 3;

export type PlayerDataType = {
    name: string;
    wins: number;
    losses: number;
    choice: string;
};

export type ChatMessage = {
    playerId: string;
    message: string;
};

export type GameContextType = {
    playerId: GameEnum;
    setPlayerId: React.Dispatch<React.SetStateAction<GameEnum>>;
    playerName: string;
    setPlayerName: React.Dispatch<React.SetStateAction<string>>;
    playerOneData: PlayerDataType;
    setPlayerOneData: React.Dispatch<React.SetStateAction<PlayerDataType>>;
    playerTwoData: PlayerDataType;
    setPlayerTwoData: React.Dispatch<React.SetStateAction<PlayerDataType>>;
    turn: GameEnum;
    setTurn: React.Dispatch<React.SetStateAction<GameEnum>>;
    isPlayerOneConnected: boolean;
    setIsPlayerOneConnected: React.Dispatch<React.SetStateAction<boolean>>;
    isPlayerTwoConnected: boolean;
    setIsPlayerTwoConnected: React.Dispatch<React.SetStateAction<boolean>>;

    // chat: ChatMessage[];
    // setChat: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
};

export type GameProviderProps = {
    children: ReactNode;
};
