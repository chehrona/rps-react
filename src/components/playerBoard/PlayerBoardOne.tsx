import React, { useEffect, useState } from 'react';

import { update } from 'firebase/database';
import { playerOneRef } from '../../utils/firebase';

// Hooks
import { useGlobalData } from '../../hooks/usePlayerData';

// Data
import data from '../../data.json';

// Native components
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Custom components
import AnimatedBorder from '../animatedBorder/AnimatedBorder';
import ScoreBoard from '../scoreBoard/ScoreBoard';
import ChoiceBoard from '../choiceBoard/ChoiceBoard';

// Styled components
import {
    PlayerContainer,
    PlayerName,
    InnerContainer,
    ScoreContainer,
    CustomIcon,
} from './playerBoardStyles';

const PlayerBoardOne: React.FC = () => {
    const { players } = useGlobalData();
    const [choice, setChoice] = useState('');

    useEffect(() => {
        update(playerOneRef, {
            choice: choice,
        });
    }, [choice]);

    const getPlayerName = () => {
        if (players.one.name.length === 0 && players.two.connected) {
            return 'Waiting...';
        } else if (players.one.name.length === 0 && !players.two.connected) {
            return 'Player 1';
        } else if (players.one.name.length !== 0) {
            return players.one.name;
        }
    };

    return (
        <PlayerContainer>
            <CustomIcon icon={faUser} $color={'var(--primary-purple)'} />
            <AnimatedBorder delay={2.5}>
                <InnerContainer>
                    <PlayerName>{getPlayerName()}</PlayerName>
                    <ChoiceBoard choice={choice} setChoice={setChoice} />
                    <ScoreContainer>
                        <ScoreBoard letters={data.WINS_ONE} score={1} />
                        <ScoreBoard letters={data.LOSSES_ONE} score={1} />
                    </ScoreContainer>
                </InnerContainer>
            </AnimatedBorder>
        </PlayerContainer>
    );
};

export default PlayerBoardOne;
