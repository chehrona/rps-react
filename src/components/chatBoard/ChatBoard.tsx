import React from 'react';

// Data
import data from '../../data.json';

// Native components
import { faMessage } from '@fortawesome/free-solid-svg-icons';

// Custom components
import AnimatedBorder from '../animatedBorder/AnimatedBorder';
import ScoreBoard from '../scoreBoard/ScoreBoard';

// Styled components
import {
    MainContainer,
    PlayerName,
    IconContainer,
    InnerContainer,
    CustomIcon,
    ScoreContainer,
} from './chatBoardStyles';

const ChatBoard: React.FC = () => {
    return (
        <MainContainer>
            <CustomIcon icon={faMessage} $color={'var(--primary-purple)'} />
            <AnimatedBorder delay={4}>
                <InnerContainer></InnerContainer>
            </AnimatedBorder>
        </MainContainer>
    );
};

export default ChatBoard;
