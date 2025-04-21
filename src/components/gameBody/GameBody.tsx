import React, { useEffect } from 'react';

import PlayerBoard from '../playerBoard/PlayerBoard';
import ChatBoard from '../chatBoard/ChatBoard';
import { BodyContainer } from './gameBodyStyles';

import { useGame } from '../../hooks/useGame';
import { onValue, ref } from 'firebase/database';
import { db, playersRef } from '../../utils/firebase';

const GameBody: React.FC = () => {
    const {
        setPlayerOneData,
        setPlayerTwoData,
        setPlayerId,
        setIsPlayerOneConnected,
        playerOneData,
        playerTwoData,
        setIsPlayerTwoConnected,
        isPlayerOneConnected,
        isPlayerTwoConnected,
    } = useGame();

    useEffect(() => {
        // Attach event listener once
        onValue(playersRef, (snapshot) => {
            const dbData = snapshot.val();

            console.log(dbData, 'inside on value');

            if (dbData === null) {
                return;
            }

            if (snapshot.child('1').exists()) {
                console.log(dbData['1'].name, 'here 1');
                setPlayerOneData((prev) => ({
                    ...prev,
                    name: dbData['1'].name,
                }));

                setPlayerId(1);
                setIsPlayerOneConnected(true);
            }

            if (snapshot.child('2').exists()) {
                console.log('here 2');

                setPlayerTwoData((prev) => ({
                    ...prev,
                    name: dbData['2'].name,
                }));

                setPlayerId(2);
                setIsPlayerTwoConnected(true);
            }
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
