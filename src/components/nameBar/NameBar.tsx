import React, { useState } from 'react';

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
    const [playerName, setPlayerName] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value);
    };

    const handleClick = () => {
        console.log('start the game');
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
