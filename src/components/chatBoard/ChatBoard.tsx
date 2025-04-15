import React from 'react';

// Data
import data from '../../data.json';

// Native components
import {
    faHandFist,
    faHand,
    faHandPeace,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

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
            <AnimatedBorder delay={4}>
                <InnerContainer>
                    <IconContainer>
                        <CustomIcon
                            icon={faHandFist}
                            $color={'var(--primary-yellow)'}
                        />
                        <CustomIcon
                            icon={faHand}
                            $color={'var(--primary-green)'}
                        />
                        <CustomIcon
                            icon={faHandPeace}
                            $color={'var(--primary-orange)'}
                        />
                    </IconContainer>
                    <ScoreContainer>
                        <ScoreBoard letters={data.WINS_ONE} score={1} />
                        <ScoreBoard letters={data.LOSSES_ONE} score={1} />
                    </ScoreContainer>
                </InnerContainer>
            </AnimatedBorder>
        </MainContainer>
    );
};

export default ChatBoard;
