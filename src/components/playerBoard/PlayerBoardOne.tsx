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
    PlayerContainer,
    PlayerName,
    IconContainer,
    InnerContainer,
    CustomIcon,
    ScoreContainer,
} from './playerBoardStyles';

const PlayerBoardOne: React.FC = () => {
    return (
        <PlayerContainer>
            <CustomIcon icon={faUser} $color={'var(--primary-purple)'} />
            <AnimatedBorder delay={2.5}>
                <InnerContainer>
                    <PlayerName>Player 1</PlayerName>
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
        </PlayerContainer>
    );
};

export default PlayerBoardOne;
