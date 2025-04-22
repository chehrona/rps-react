import React from 'react';

import PlayerBoard from '../playerBoard/PlayerBoard';
import ChatBoard from '../chatBoard/ChatBoard';
import { BodyContainer } from './gameBodyStyles';
import { useFirebase } from '../../hooks/useFirebase';

const GameBody: React.FC = () => {
    useFirebase();

    return (
        <BodyContainer>
            <PlayerBoard playerNumber={1} />
            <ChatBoard />
            <PlayerBoard playerNumber={2} />
        </BodyContainer>
    );
};

export default GameBody;
