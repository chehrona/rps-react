import React from 'react';
import { useGame } from '../../hooks/useGame';
import AnimatedBorder from '../animatedBorder/AnimatedBorder';
import ScoreBoard from '../scoreBoard/ScoreBoard';
import ChoiceBoard from '../choiceBoard/ChoiceBoard';
import { faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import {
    PlayerContainer,
    PlayerName,
    InnerContainer,
    ScoreContainer,
    CustomIcon,
} from './playerBoardStyles';
import data from '../../data.json';
import { PlayerBoardProps } from './types';

const PlayerBoard: React.FC<PlayerBoardProps> = ({ playerNumber }) => {
    const { playerOneData, playerTwoData } = useGame();
    const playerData = playerNumber === 1 ? playerOneData : playerTwoData;

    return (
        <PlayerContainer id={`${playerNumber}`}>
            <CustomIcon
                icon={playerNumber === 1 ? faUser : faUserTie}
                $color={'var(--primary-purple)'}
            />
            <AnimatedBorder delay={2.5}>
                <InnerContainer>
                    <PlayerName>{playerData.name}</PlayerName>
                    <ChoiceBoard playerNumber={playerNumber} />
                    <ScoreContainer>
                        <ScoreBoard
                            letters={
                                playerNumber === 1
                                    ? data.WINS_ONE
                                    : data.WINS_TWO
                            }
                            score={playerData.wins}
                        />
                        <ScoreBoard
                            letters={
                                playerNumber === 1
                                    ? data.LOSSES_ONE
                                    : data.LOSSES_TWO
                            }
                            score={playerData.losses}
                        />
                    </ScoreContainer>
                </InnerContainer>
            </AnimatedBorder>
        </PlayerContainer>
    );
};

export default PlayerBoard;
