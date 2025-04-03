import React from 'react';

// Data
import data from '../../data.json';

import { faHandFist, faHand, faPeace } from '@fortawesome/free-solid-svg-icons';

// Styled components
import {
    PlayerContainer,
    PlayerName,
    IconContainer,
    InnerContainer,
    CustomIcon,
    ScoreContainer,
    ScoreWrapper,
    Score,
} from './playerBoardStyles';
import AnimatedBorder from '../animatedBorder/AnimatedBorder';
import { HeaderLetter } from '../header/headerStyles';
import { DataTypes } from '../header/types';

const PlayerBoard: React.FC = () => {
    return (
        <PlayerContainer>
            <AnimatedBorder delay={2.5}>
                <InnerContainer>
                    <PlayerName>Player 1</PlayerName>
                    <IconContainer>
                        <CustomIcon icon={faHandFist} />
                        <CustomIcon icon={faHand} />
                        <CustomIcon icon={faPeace} />
                    </IconContainer>
                    <ScoreContainer>
                        <ScoreWrapper>
                            {data.WINS.map((entry: DataTypes, i: number) => {
                                return (
                                    <HeaderLetter
                                        key={i}
                                        $delay={entry.delay}
                                        $font={'var(--body-size)'}
                                        $color={'var(--primary-white)'}
                                        $margin={entry.letter.length === 0}
                                    >
                                        {entry.letter}
                                    </HeaderLetter>
                                );
                            })}
                            <Score></Score>
                        </ScoreWrapper>
                        <ScoreWrapper>
                            {data.LOSSES.map((entry: DataTypes, i: number) => {
                                return (
                                    <HeaderLetter
                                        key={i}
                                        $delay={entry.delay}
                                        $font={'var(--body-size)'}
                                        $color={'var(--primary-white)'}
                                        $margin={entry.letter.length === 0}
                                    >
                                        {entry.letter}
                                    </HeaderLetter>
                                );
                            })}
                        </ScoreWrapper>
                    </ScoreContainer>
                </InnerContainer>
            </AnimatedBorder>
        </PlayerContainer>
    );
};

export default PlayerBoard;
