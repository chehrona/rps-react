import React, { useState, useMemo, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from './utils/firebase';

import Header from './components/header/Header';
import GameBody from './components/gameBody/GameBody';
import NameBar from './components/nameBar/NameBar';
import { DataContext } from './hooks/usePlayerData';
import { DataContextType } from './hooks/types';

const playersRef = ref(db, 'players');
const playerOneRef = ref(db, 'players/1');
const playerTwoRef = ref(db, 'players/2');
const turnRef = ref(db, 'turn');
let chatRef = ref(db, 'chat');

function App(): React.JSX.Element {
    const initialValues = {
        one: { name: '', connected: false, choice: '', wins: 0, losses: 0 },
        two: { name: '', connected: false, choice: '', wins: 0, losses: 0 },
    };
    const [players, setPlayers] = useState(initialValues);
    const [game, setGame] = useState({
        turn: null as string | null,
        hasPlayerOneChosen: false,
        hasPlayerTwoChosen: false,
    });

    const value = useMemo<DataContextType>(
        () => ({
            players,
            setPlayers,
        }),
        [players, setPlayers]
    );

    useEffect(() => {
        const query = ref(db, 'players');
        return onValue(query, (snapshot) => {
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
