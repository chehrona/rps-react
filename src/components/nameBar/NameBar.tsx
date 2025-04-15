import React from 'react';

// Components
import AnimatedBorder from '../animatedBorder/AnimatedBorder';

// Types
import { NameBarProps } from './types';

// Styled components
import {
    MainContainer,
    InnerContainer,
    CustomInputField,
    CustomButton,
} from './nameBarStyles';

const NameBar: React.FC<NameBarProps> = ({ setPlayerName }) => {
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
                    />
                    <CustomButton onClick={handleClick}>Start</CustomButton>
                </InnerContainer>
            </AnimatedBorder>
        </MainContainer>
    );
};

export default NameBar;
