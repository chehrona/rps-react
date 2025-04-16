import React, { useState } from 'react';

// Hooks
import { useGlobalData } from '../../hooks/usePlayerData';

// Data
import data from '../../data.json';

import PlayerBoardOne from '../playerBoard/PlayerBoardOne';
import PlayerBoardTwo from '../playerBoard/PlayerBoardTwo';

// Styled components
import { BodyContainer } from './gameBodyStyles';
import ChatBoard from '../chatBoard/ChatBoard';

const GameBody: React.FC = () => {
    const { players } = useGlobalData();
    const [loading, setLoading] = useState('');

    if (
        players.one.choice.length &&
        players.two.connected &&
        !players.two.choice.length
    ) {
        setLoading('2');
    }
    return (
        <BodyContainer>
            <PlayerBoardOne />
            <ChatBoard />
            <PlayerBoardTwo loading={loading} />
        </BodyContainer>
    );
};

export default GameBody;
