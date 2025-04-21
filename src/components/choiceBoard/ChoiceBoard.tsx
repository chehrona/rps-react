import React from 'react';

import { db } from '../../utils/firebase';
import { update, ref } from 'firebase/database';
import { useGame } from '../../hooks/useGame';
// Native components
import {
    faHandFist,
    faHand,
    faHandPeace,
} from '@fortawesome/free-solid-svg-icons';

// Types
import { ChoiceBoardProps } from './types';

// Styled components
import { IconContainer } from './choiceBoardStyles';
import { CustomIcon } from '../playerBoard/playerBoardStyles';
import { CustomButton } from '../nameBar/nameBarStyles';

const ChoiceBoard: React.FC<ChoiceBoardProps> = ({ choice, setChoice }) => {
    const { playerId, turn } = useGame();

    const handleClick = (choice: 'rock' | 'paper' | 'scissors') => {
        if (playerId === 3 || turn !== playerId) return;

        update(ref(db, `players/${playerId}`), {
            choice,
        });

        update(ref(db), {
            turn: playerId === 1 ? 2 : 3,
        });
    };

    const renderChoice = () => {
        switch (choice) {
            case 'rock':
                return (
                    <CustomIcon
                        icon={faHandFist}
                        $color={'var(--primary-yellow)'}
                    />
                );
            case 'paper':
                return (
                    <CustomIcon icon={faHand} $color={'var(--primary-green)'} />
                );
            case 'scissors':
                return (
                    <CustomIcon
                        icon={faHandPeace}
                        $color={'var(--primary-orange)'}
                    />
                );
            default:
                return (
                    <>
                        <CustomButton onClick={() => handleClick('rock')}>
                            <CustomIcon
                                icon={faHandFist}
                                $color={'var(--primary-yellow)'}
                            />
                        </CustomButton>
                        <CustomButton onClick={() => handleClick('paper')}>
                            <CustomIcon
                                icon={faHand}
                                $color={'var(--primary-green)'}
                            />
                        </CustomButton>
                        <CustomButton onClick={() => handleClick('scissors')}>
                            <CustomIcon
                                icon={faHandPeace}
                                $color={'var(--primary-orange)'}
                            />
                        </CustomButton>
                    </>
                );
        }
    };

    return <IconContainer>{renderChoice()}</IconContainer>;
};

export default ChoiceBoard;
