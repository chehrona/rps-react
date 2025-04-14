import React from 'react';

// Styled components
import { ScoreWrapper, Score } from './scoreBoardStyles';
import { HeaderLetter } from '../header/headerStyles';
import { DataTypes } from '../header/types';
import { ScoreBoardProps } from './types';

const ScoreBoard: React.FC<ScoreBoardProps> = ({ letters, score }) => {
    return (
        <ScoreWrapper>
            {letters.map((entry: DataTypes, i: number) => {
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
            <Score>{score}</Score>
        </ScoreWrapper>
    );
};

export default ScoreBoard;
