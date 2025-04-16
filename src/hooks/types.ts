export type PlayerObj = {
    name: string;
    connected: boolean;
    choice: string;
    wins: number;
    losses: number;
};

export type DataContextType = {
    players: {
        one: PlayerObj;
        two: PlayerObj;
    };
};
