import React from 'react';

// Data
import data from '../../data.json';

import PlayerBoardOne from '../playerBoard/PlayerBoardOne';
import PlayerBoardTwo from '../playerBoard/PlayerBoardTwo';

// Styled components
import { MainContainer } from './gameBodyStyles';

const GameBody: React.FC = () => {
    return (
        <MainContainer>
            <PlayerBoardOne />
            <PlayerBoardTwo />
        </MainContainer>
    );
};

export default GameBody;
