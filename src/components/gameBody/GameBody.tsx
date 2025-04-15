import React from 'react';

// Data
import data from '../../data.json';

import PlayerBoardOne from '../playerBoard/PlayerBoardOne';
import PlayerBoardTwo from '../playerBoard/PlayerBoardTwo';

// Styled components
import { BodyContainer } from './gameBodyStyles';
import ChatBoard from '../chatBoard/ChatBoard';

const GameBody: React.FC = () => {
    return (
        <BodyContainer>
            <PlayerBoardOne />
            <ChatBoard />
            <PlayerBoardTwo />
        </BodyContainer>
    );
};

export default GameBody;
