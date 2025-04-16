import React, { useEffect, useState } from 'react';

import { ref, update } from 'firebase/database';
import { db, playerTwoRef, turnRef } from '../../utils/firebase';

// Hooks
import { useGlobalData } from '../../hooks/usePlayerData';

// Data
import data from '../../data.json';

// Native components
import { faSpinner, faUserTie } from '@fortawesome/free-solid-svg-icons';

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

const PlayerBoardTwo: React.FC<{ loading: string }> = ({ loading }) => {
    const { players, turn } = useGlobalData();
    const [choice, setChoice] = useState(loading);

    useEffect(() => {
        update(playerTwoRef, {
            choice: choice,
        });
    }, []);

    const getPlayerName = () => {
        if (players.two.name.length === 0 && players.one.connected) {
            return 'Waiting...';
        } else if (players.two.name.length === 0 && !players.one.connected) {
            return 'Player 2';
        } else if (players.two.name.length !== 0) {
            return players.two.name;
        }
    };

    return (
        <PlayerContainer>
            <CustomIcon icon={faUserTie} $color={'var(--primary-purple)'} />
            <AnimatedBorder delay={2.5}>
                <InnerContainer>
                    <PlayerName>{getPlayerName()}</PlayerName>
                    {players.two.connected &&
                    !players.two.choice.length &&
                    turn === 2 ? (
                        <CustomIcon
                            icon={faSpinner}
                            $color={'var(--primary-purple)'}
                        />
                    ) : (
                        <ChoiceBoard choice={choice} setChoice={setChoice} />
                    )}
                    <ScoreContainer>
                        <ScoreBoard letters={data.WINS_ONE} score={1} />
                        <ScoreBoard letters={data.LOSSES_ONE} score={1} />
                    </ScoreContainer>
                </InnerContainer>
            </AnimatedBorder>
        </PlayerContainer>
    );
};

export default PlayerBoardTwo;
