import React from 'react';

// Data
import data from '../../data.json';

// Types
import { DataTypes } from './types';

// Components
import AnimatedBorder from '../animatedBorder/AnimatedBorder';

// Styled components
import { HeaderContainer, HeaderLetter, InnerContainer } from './headerStyles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <AnimatedBorder delay={0}>
                <InnerContainer>
                    {data.HEADER.map((entry: DataTypes, i: number) => {
                        return (
                            <HeaderLetter
                                key={i}
                                $delay={entry.delay}
                                $color={'var(--primary-pink)'}
                                $font={'var(--title-size)'}
                                $margin={entry.letter.length === 0}
                            >
                                {entry.letter}
                            </HeaderLetter>
                        );
                    })}
                </InnerContainer>
            </AnimatedBorder>
        </HeaderContainer>
    );
};

export default Header;
