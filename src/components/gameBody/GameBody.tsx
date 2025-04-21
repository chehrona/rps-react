import React, { useEffect } from 'react';

import PlayerBoard from '../playerBoard/PlayerBoard';
import ChatBoard from '../chatBoard/ChatBoard';
import { BodyContainer } from './gameBodyStyles';

import { useGame } from '../../hooks/useGame';
import { onValue } from 'firebase/database';
import { playersRef, turnRef } from '../../utils/firebase';

const GameBody: React.FC = () => {
    const {
        setPlayerOneData,
        setPlayerTwoData,
        setPlayerId,
        setIsPlayerOneConnected,
        setIsPlayerTwoConnected,
        setTurn,
    } = useGame();

    useEffect(() => {
        // Attach event listener once
        onValue(playersRef, (snapshot) => {
            const playerData = snapshot.val();

            if (playerData === null) {
                return;
            }

            if (snapshot.child('1').exists()) {
                setPlayerOneData((prev) => ({
                    ...prev,
                    name: playerData['1'].name,
                }));

                setPlayerId(1);
                setIsPlayerOneConnected(true);
            }

            if (snapshot.child('2').exists()) {
                setPlayerTwoData((prev) => ({
                    ...prev,
                    name: playerData['2'].name,
                }));

                setPlayerId(2);
                setIsPlayerTwoConnected(true);
            }
        });

        onValue(turnRef, (snapshot) => {
            const turnData = snapshot.val();

            if (turnData === null) {
                return;
            }

            setTurn(turnData.turn);
        });
    }, []);

    return (
        <BodyContainer>
            <PlayerBoard playerNumber={1} />
            <ChatBoard />
            <PlayerBoard playerNumber={2} />
        </BodyContainer>
    );
};

export default GameBody;
