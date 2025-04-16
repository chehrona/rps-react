import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../../utils/firebase';

// Hooks
import { useGlobalData } from '../../hooks/usePlayerData';

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
    const { players } = useGlobalData();
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    };

    const handleClick = () => {
        if (players.one.connected) {
            set(ref(db, 'players/2'), {
                name: playerName,
                losses: 0,
                wins: 0,
            });
        } else {
            set(ref(db, 'players/1'), {
                name: playerName,
                losses: 0,
                wins: 0,
            });
        }

        setPlayerName('');
    };

    return (
        <MainContainer>
            <AnimatedBorder delay={5}>
                <InnerContainer>
                    <CustomInputField
                        placeholder={'Your name'}
                        onChange={(e) => handleChange(e)}
                        value={playerName}
                    />
                    <CustomButton onClick={handleClick}>Start</CustomButton>
                </InnerContainer>
            </AnimatedBorder>
        </MainContainer>
    );
};

export default NameBar;
