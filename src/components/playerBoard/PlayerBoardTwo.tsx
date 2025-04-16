import React from 'react';

// Hooks
import { useGlobalData } from '../../hooks/usePlayerData';

// Data
import data from '../../data.json';

// Native components
import {
    faHandFist,
    faHand,
    faHandPeace,
    faUserTie,
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
    ScoreContainer,
    CustomIcon,
} from './playerBoardStyles';

const PlayerBoardTwo: React.FC = () => {
    const { players } = useGlobalData();
    return (
        <PlayerContainer>
            <CustomIcon icon={faUserTie} $color={'var(--primary-purple)'} />
            <AnimatedBorder delay={2.5}>
                <InnerContainer>
                    <PlayerName>
                        {players.two.name.length === 0
                            ? 'Player 2'
                            : players.one.connected
                            ? 'Waiting ...'
                            : players.two.name}
                    </PlayerName>
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

export default PlayerBoardTwo;
