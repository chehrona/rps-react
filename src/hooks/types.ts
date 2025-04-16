export type PlayerObj = {
    id: 1 | 2;
    name: string;
    connected: boolean;
    choice: string;
    wins: number;
    losses: number;
};

export type PlayersObj = {
    one: PlayerObj;
    two: PlayerObj;
};

export type DataContextType = {
    turn: 1 | 2 | 3;
    setTurn: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
    players: PlayersObj;
    setPlayers: React.Dispatch<React.SetStateAction<PlayersObj>>;
};
