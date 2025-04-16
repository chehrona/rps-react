import React, { useState, useMemo, useEffect } from 'react';
import { onValue } from 'firebase/database';
import { playersRef } from './utils/firebase';

import Header from './components/header/Header';
import GameBody from './components/gameBody/GameBody';
import NameBar from './components/nameBar/NameBar';
import { DataContext } from './hooks/usePlayerData';
import { DataContextType, PlayersObj } from './hooks/types';

function App(): React.JSX.Element {
    const initialValues: PlayersObj = {
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
    };
    const [players, setPlayers] = useState<PlayersObj>(initialValues);
    const [turn, setTurn] = useState<1 | 2 | 3>(3);
    const [game, setGame] = useState({
        turn: null as string | null,
        hasPlayerOneChosen: false,
        hasPlayerTwoChosen: false,
    });

    const value = useMemo<DataContextType>(
        () => ({
            players,
            setPlayers,
            turn,
            setTurn,
        }),
        [players, setPlayers]
    );

    useEffect(() => {
        return onValue(playersRef, (snapshot) => {
            const data = snapshot.val();

            if (data === null) {
                setPlayers(initialValues);
            }

            let firstPlayerId = snapshot.child('1').exists();
            let secondPlayerId = snapshot.child('2').exists();

            if (firstPlayerId) {
                setPlayers((prev) => ({
                    ...prev,
                    one: {
                        ...prev.one,
                        name: snapshot.val()['1'].name,
                        connected: true,
                        choice: snapshot.child('1/choice').exists()
                            ? data['1'].choice
                            : '',
                    },
                }));
            }

            if (secondPlayerId) {
                setPlayers((prev) => ({
                    ...prev,
                    two: {
                        ...prev.two,
                        name: snapshot.val()['2'].name,
                        connected: true,
                        choice: snapshot.child('1/choice').exists()
                            ? data['2'].choice
                            : '',
                    },
                }));
            }
        });
    }, []);

    return (
        <DataContext.Provider value={value}>
            <div className="app">
                <Header />
                <NameBar />
                <GameBody />
            </div>
        </DataContext.Provider>
    );
}

export default App;
