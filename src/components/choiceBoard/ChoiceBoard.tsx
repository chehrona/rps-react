import React, { useEffect, useState } from 'react';

import { playerOneRef, playerTwoRef, turnRef } from '../../utils/firebase';
import { update, get } from 'firebase/database';
import { useGame } from '../../hooks/useGame';
// Native components
import {
    faHandFist,
    faHand,
    faHandPeace,
} from '@fortawesome/free-solid-svg-icons';

// Styled components
import { IconContainer } from './choiceBoardStyles';
import { CustomIcon } from '../playerBoard/playerBoardStyles';
import { CustomButton } from '../nameBar/nameBarStyles';
import { GameEnum } from '../../hooks/types';

const ChoiceBoard: React.FC<{ playerNumber: GameEnum }> = ({
    playerNumber,
}) => {
    const {
        playerId,
        playerOneData,
        playerTwoData,
        disabled,
        isPlayerOneConnected,
        isPlayerTwoConnected,
        turn,
    } = useGame();
    const playerData = playerId === 1 ? playerOneData : playerTwoData;
    const canChoose =
        disabled !== playerNumber ||
        disabled !== turn ||
        !isPlayerOneConnected ||
        !isPlayerTwoConnected;

    const handleClick = (choice: string) => {
        if (turn === 1) {
            update(playerOneRef, {
                choice: choice,
            });

            update(turnRef, {
                turn: 2,
            });
        } else if (turn === 2) {
            update(playerTwoRef, {
                choice: choice,
            });

            update(turnRef, {
                turn: 3,
            });
        }
    };

    const renderChoice = () => {
        switch (playerData.choice) {
            case 'r':
                return (
                    <CustomIcon
                        icon={faHandFist}
                        $color={'var(--primary-yellow)'}
                    />
                );
            case 'p':
                return (
                    <CustomIcon icon={faHand} $color={'var(--primary-green)'} />
                );
            case 's':
                return (
                    <CustomIcon
                        icon={faHandPeace}
                        $color={'var(--primary-orange)'}
                    />
                );
            default:
                return (
                    <>
                        <CustomButton onClick={() => handleClick('r')}>
                            <CustomIcon
                                icon={faHandFist}
                                $color={'var(--primary-yellow)'}
                            />
                        </CustomButton>
                        <CustomButton onClick={() => handleClick('p')}>
                            <CustomIcon
                                icon={faHand}
                                $color={'var(--primary-green)'}
                            />
                        </CustomButton>
                        <CustomButton onClick={() => handleClick('s')}>
                            <CustomIcon
                                icon={faHandPeace}
                                $color={'var(--primary-orange)'}
                            />
                        </CustomButton>
                    </>
                );
        }
    };

    return (
        <IconContainer $disabled={canChoose}>{renderChoice()}</IconContainer>
    );
};

export default ChoiceBoard;
