import { useEffect } from 'react';
import { onValue } from 'firebase/database';
import { playersRef, turnRef } from '../utils/firebase';
import { useGame } from './useGame';

export const useFirebase = () => {
    const {
        setPlayerOneData,
        setPlayerTwoData,
        setIsPlayerOneConnected,
        setIsPlayerTwoConnected,
        setTurn,
        playerOneData,
        playerTwoData,
    } = useGame();

    useEffect(() => {
        onValue(playersRef, (snapshot) => {
            const playerData = snapshot.val();
            if (playerData === null) return;

            if (snapshot.child('1').exists()) {
                setPlayerOneData((prev) => ({
                    ...prev,
                    name: playerData['1'].name,
                }));
                setIsPlayerOneConnected(true);
            }

            if (snapshot.child('2').exists()) {
                setPlayerTwoData((prev) => ({
                    ...prev,
                    name: playerData['2'].name,
                }));
                setIsPlayerTwoConnected(true);
            }
        });

        // When turn changes
        onValue(turnRef, (snapshot) => {
            const turnData = snapshot.val();
            if (turnData === null) return;

            setTurn(turnData.turn);

            if (
                playerOneData.choice.length !== 0 &&
                playerTwoData.choice.length !== 0 &&
                turnData.turn === 3
            ) {
                // gameRules();
                // setTimeout(resetGame, 4000);
            }
        });
    }, [playerOneData.choice, playerTwoData.choice]);
};
