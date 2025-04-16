import React from 'react';

import { turnRef } from '../../utils/firebase';

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
    const handleClick = (value: string) => {
        setChoice(value);
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
