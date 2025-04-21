import React, { ChangeEvent, useEffect, useState } from 'react';
import { ref, set, onDisconnect, update } from 'firebase/database';
import { db } from '../../utils/firebase';

import { playerOneRef, playerTwoRef, turnRef } from '../../utils/firebase';

// Hooks
import { useGame } from '../../hooks/useGame';
import { GameEnum } from '../../hooks/types';

// Components
import AnimatedBorder from '../animatedBorder/AnimatedBorder';

// Styled components
import {
    MainContainer,
    InnerContainer,
    CustomInputField,
    CustomButton,
} from './nameBarStyles';

const NameBar: React.FC = () => {
    const [input, setInput] = useState('');
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const { isPlayerOneConnected, isPlayerTwoConnected, setDisabled, setTurn } =
        useGame();

    useEffect(() => {
        if (isPlayerOneConnected && isPlayerTwoConnected) {
            set(turnRef, {
                turn: 1,
            });

            setTurn(1);
        }
    }, [isPlayerOneConnected, isPlayerTwoConnected]);

    const onNameEntered = () => {
        if (input === '') {
            // createsModals('Please enter your name');
            return;
        }

        // If the player 1 slot is occupied, immediately put the entered name to the opponent screen to prevent manual selection.
        if (isPlayerOneConnected) {
            set(playerTwoRef, {
                name: input,
                losses: 0,
                wins: 0,
                choice: '',
            });

            setDisabled(2);
        } else {
            set(playerOneRef, {
                name: input,
                losses: 0,
                wins: 0,
                choice: '',
            });

            setDisabled(1);
        }

        // Prevents entering another name.
        setIsInputDisabled(true);
        setInput('');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.target.value.trim());
    };

    const handleClick = () => {
        onNameEntered();
    };

    // const handelKeyPress = (e: KeyboardEvent<HTMLInputElement>, ) => {
    //     if (e.keyCode === '13') {
    //         onNameEntered();
    //     }
    // };

    return (
        <MainContainer>
            <AnimatedBorder delay={5}>
                <InnerContainer $disabled={isInputDisabled}>
                    <CustomInputField
                        placeholder={'Your name'}
                        onChange={(e) => handleChange(e)}
                        value={input}
                        // onKeyDown={(e) => handelKeyPress(e)}
                    />
                    <CustomButton onClick={handleClick}>Start</CustomButton>
                </InnerContainer>
            </AnimatedBorder>
        </MainContainer>
    );
};

export default NameBar;
