import React from 'react';

// Data
import data from '../../data.json';

// Types

// Components
import AnimatedBorder from '../animatedBorder/AnimatedBorder';

// Styled components
import {
    MainContainer,
    InnerContainer,
    CustomInputField,
} from './nameBarStyles';

const NameBar: React.FC = () => {
    return (
        <MainContainer>
            <AnimatedBorder delay={5}>
                <InnerContainer>
                    <CustomInputField placeholder={'Your name'} />
                </InnerContainer>
            </AnimatedBorder>
        </MainContainer>
    );
};

export default NameBar;
